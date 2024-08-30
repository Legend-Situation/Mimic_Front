import React, { useState, useRef } from 'react';
import * as _ from './style';
import Profile from 'assets/image/Profile.png';
import ProfileEdit from 'assets/icon/ProfileEdit';

interface ProfileLayoutProps {
  show: boolean;
}

const ProfileLayout = ({ show }: ProfileLayoutProps) => {
  const [image, setImage] = useState(Profile);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = URL.createObjectURL(event.target.files[0]);
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
        <_.ProfileLayout_ProfileEdit show={show} onClick={handleIconClick}>
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