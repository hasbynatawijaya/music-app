import getSongsByTitle from "@/actions/getSongsByTitle";

import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import SearchContent from "./components/SearchContent";

interface Props {
  searchParams: {
    title: string;
  };
}

export const revalidate = 0;

const Search: React.FC<Props> = async ({ searchParams }) => {
  const songs = await getSongsByTitle(searchParams.title);

  return (
    <div className="bg-neutral-900 rounded-lg h-full w0full overflow-hidden overflow-y-auto">
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gapy-y-6">
          <h1 className="text-white text-3xl font-semibold mb-2">Search</h1>
          <SearchInput />
        </div>
      </Header>
      <SearchContent songs={songs} />
    </div>
  );
};

export default Search;