"use client";

import { FC } from "react";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import { useUser } from "@supabase/auth-helpers-react";

import useAuthModal from "@/hooks/useAuthModal";
import useUploadModal from "@/hooks/useUploadModal";
import useOnPlay from "@/hooks/useOnPlay";

import MediaItem from "./MediaItem";

import { Song } from "@/types";

interface Props {
  songs: Song[];
}

const Library: FC<Props> = ({ songs }) => {
  const authModal = useAuthModal();
  const uploadModal = useUploadModal();
  const user = useUser();

  const onPlay = useOnPlay(songs);

  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }

    uploadModal.onOpen();
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist size={26} className="text-neutral-400" />
          <p className="text-neutral-400 font-medium">Your Library</p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          size={20}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-2 px-3">
        {songs.map((song) => (
          <MediaItem key={song.id} song={song} onClick={(id) => onPlay(id)} />
        ))}
      </div>
    </div>
  );
};

export default Library;
