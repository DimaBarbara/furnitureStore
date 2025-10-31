import { Listbox } from '@headlessui/react';
import { useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/20/solid';

const options: string[] = ['Новинки', 'Популярные', 'Скидки'];

const MySelect: React.FC = () => {
  const [selected, setSelected] = useState<string>('Новинки');

  return (
    <div className="relative w-full">
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <Listbox.Button className="w-full h-[60px] text-[16px] pl-4 pr-4 border-none rounded-md bg-white flex items-center focus:outline-none">
              <span className="flex-1">{selected}</span>
              {open ? (
                <ChevronUpIcon className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDownIcon className="w-5 h-5 text-gray-500" />
              )}
            </Listbox.Button>

            <Listbox.Options className="absolute mt-1 w-full rounded-md shadow-lg bg-white z-10 focus:outline-none">
              {options.map((option) => (
                <Listbox.Option
                  key={option}
                  value={option}
                  className={({ active }) =>
                    `cursor-pointer select-none p-2 ${active ? 'bg-blue-500 text-white' : 'text-gray-800'}`
                  }
                >
                  {option}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </>
        )}
      </Listbox>
    </div>
  );
};

export default MySelect;
