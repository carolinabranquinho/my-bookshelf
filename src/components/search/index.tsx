import { useState } from "react";
import Combobox from "../Combobox";
import { OptionProps, BookData } from "@/components/utils/types";
import { useSearchBooks } from "@/data/books";

type SearchProps = {
  handleSelectedItem(item: BookData | undefined): void;
}

export default function Search({handleSelectedItem}: SearchProps){
  const [search, setSearch] = useState('');
  const [option, setOption] = useState<OptionProps>();
  
  const { data } = useSearchBooks(search);
  const options = data?.map((m: BookData) => ({
    id: m.id,
    label: m.volumeInfo.title,
  })) || [];

  const handleOnSelect = (item: OptionProps) => {
    setOption(item);
    const selectedItem = data?.filter((book) => book.id === item.id)[0];
    console.log(item, selectedItem)
    handleSelectedItem(selectedItem);
  }


  return(
      <Combobox
        query={search}
        onChangeQuery={setSearch}
        onSelect={handleOnSelect}
        options={options}
        selected={option}
      />
  )
}