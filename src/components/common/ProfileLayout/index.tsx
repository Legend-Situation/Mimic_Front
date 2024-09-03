import React, { useState, useRef } from 'react';
import * as _ from './style';
import ProfileEdit from 'assets/icon/ProfileEdit';
import { useMutation } from 'react-query';
import { Upload_Image } from 'lib/api/Upload';

interface ProfileLayoutProps {
  edit: boolean;
  profileImage: string;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
}

const ProfileLayout = ({
  edit,
  profileImage,
  setImageUrl
}: ProfileLayoutProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState(profileImage);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('img', file);

      ImageUpload(formData, {
        onSuccess: (res) => {
          setImage(URL.createObjectURL(file));
          setImageUrl(res.data.url);
        }
      });
    }
  };

  const { mutate: ImageUpload } = useMutation(Upload_Image, {
    onError: (err: any) => {
      if (err.status === 413) {
        alert('사진 용량이 너무 큽니다.');
      }
    }
  });

  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <_.ProfileLayout_Layout>
      <_.ProfileLayout_Container>
        <_.ProfileLayout_Image src={image} />
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
