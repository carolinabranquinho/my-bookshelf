import { Combobox as HeadlessCombobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import { useEffect, useState, useMemo } from 'react'
import { OptionProps } from './utils/types';
import { debounce } from "lodash";

type ComboboxProps = {
  selected: OptionProps | undefined;
  onSelect(item: OptionProps): void;
  query: string;
  onChangeQuery(query: string): void;
  options: OptionProps[];
}

export default function Combobox({selected, onSelect, query, onChangeQuery, options}: ComboboxProps) {
  const [comboQuery, setComboquery] = useState(query);
  
  const handleOnQueryChange = useMemo(() => {
    return debounce(onChangeQuery, 500);
  }, [onChangeQuery]);

  useEffect(() => {
    handleOnQueryChange(comboQuery)
  }, [comboQuery, handleOnQueryChange])

  return (
    <HeadlessCombobox value={selected} onChange={onSelect} onClose={() => onChangeQuery('')}>
      <ComboboxInput
        aria-label="Search"
        displayValue={(selected: OptionProps) => selected?.label}
        onChange={(event) => setComboquery(event.target.value)}
      />
      <ComboboxOptions anchor="bottom" className="border empty:invisible">
        {options.map((item: OptionProps) => (
          <ComboboxOption key={item.id} value={item} className="data-[focus]:bg-blue-100">
            {item.label}
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </HeadlessCombobox>
  )
}
