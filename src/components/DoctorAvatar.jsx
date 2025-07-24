import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';

const getInitials = (name) => {
  const nameParts = name.split(' ');
  if (nameParts.length > 1) {
    return `${nameParts[0][0]}${nameParts[nameParts.length - 1][0]}`.toUpperCase();
  }
  return name[0].toUpperCase();
};

const DoctorAvatar = ({ doctor }) => (
  <Avatar className="w-20 h-20">
    <AvatarImage src={doctor.image} alt={doctor.name} />
    <AvatarFallback className="text-xl font-bold bg-gray-200 text-gray-600">
      {getInitials(doctor.name)}
    </AvatarFallback>
  </Avatar>
);

export default DoctorAvatar; 