"use client";

import { FC } from "react";
import useLoadImage from "@/hooks/useLoadImage";
import Image from "next/image";

import { Song } from "@/types";

interface Props {
  song: Song;
  onClick?: (id: string) => void;
}

const MediaItem: FC<Props> = ({ song, onClick }) => {
  const imagePath = useLoadImage(song);

  const handleClick = () => {
    if (onClick) {
      return onClick(song.id);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center gap-x-3 cursor-pointer hover:bg-neu-800/50 w-full p-2 rounded-md"
    >
      <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
        <Image
          fill
          src={imagePath || "/images/liked.png"}
          alt="Media item"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">{song.title}</p>
        <p className="text-neutral-400 text-sm truncate">{song.author}</p>
      </div>
    </div>
  );
};

export default MediaItem;
