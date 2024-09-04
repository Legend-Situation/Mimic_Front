import React, { useState, useRef } from 'react';
import * as _ from './style';
import ProfileEdit from 'assets/icon/ProfileEdit';
import { useMutation } from 'react-query';
import { Upload_Image } from 'lib/api/Upload';

interface ProfileLayoutProps {
  edit: boolean;
  profileImage: string;
  setImageUrl: (url: string) => void;
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({
  edit,
  profileImage,
  setImageUrl
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string>('');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('img', file);

      ImageUpload(formData, {
        onSuccess: (res) => {
          const uploadedUrl = res.data.url;
          setImage(URL.createObjectURL(file)); // 로컬 미리보기 URL
          setImageUrl(uploadedUrl); // 부모 컴포넌트로 URL 전달
        }
      });
    }
  };

  const { mutate: ImageUpload } = useMutation(Upload_Image, {
    onError: (err: any) => {
      if (err.status === 413) {
        alert('사진 용량이 너무 큽니다.');
      } else {
        console.error('Image upload failed:', err);
      }
    }
  });

  const handleIconClick = (): void => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <_.ProfileLayout_Layout>
      <_.ProfileLayout_Container>
        <_.ProfileLayout_Image src={image ? image : profileImage} />
        <_.ProfileLayout_ProfileEdit edit={edit} onClick={handleIconClick}>
          <ProfileEdit />
        </_.ProfileLayout_ProfileEdit>
        <_.ProfileLayout_ProfileInput
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          ref={fileInputRef}
        />
      </_.ProfileLayout_Container>
    </_.ProfileLayout_Layout>
  );
};

export default ProfileLayout;
