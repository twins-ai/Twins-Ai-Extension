import React from "react";

interface AvatarProps {
  src: string;
  alt?: string;
  status?: "online" | "offline";
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "",

  status = "offline",
}) => {
  const statusClasses = status === "online" ? "bg-green-400" : "bg-gray-400";

  return (
    <span className="relative inline-block">
      <img className={`h-20 w-20 rounded-full`} src={src} alt={alt} />
      <span
        className={`absolute bottom-0 right-0 block h-4 w-4 rounded-full ${statusClasses} ring-2 ring-white`}
      />
    </span>
  );
};

export default Avatar;
