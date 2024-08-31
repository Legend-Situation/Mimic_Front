import React, { useState, useRef } from 'react';
import * as _ from './style';
import Profile from 'assets/image/Profile.png';
import ProfileEdit from 'assets/icon/ProfileEdit';

interface ProfileLayoutProps {
  edit: boolean;
}

const ProfileLayout = ({ edit }: ProfileLayoutProps) => {
  const [image, setImage] = useState(Profile);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = URL.createObjectURL(e.target.files[0]);
      setImage(file);
    }
  };

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