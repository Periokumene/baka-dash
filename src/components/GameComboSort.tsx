import {Button, For, Menu, Portal} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";


const options = [
  { value: "", label: "Relevance" },
  { value: "-added", label: "Date added" },
  { value: "name", label: "Name" },
  { value: "-released", label: "Release date" },
  { value: "-metacritic", label: "Popularity" },
  { value: "-rating", label: "Average rating" },
];

interface Props {
  ordering: string,
  onSelectOrdering: (order: string) => void,
}

export function GameComboSort({ordering, onSelectOrdering} : Props) {
  const currentOption = options.find(option=>option.value===ordering);

  return (
    <>
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline" size="sm">
            <BsChevronDown/>
            SortBy {currentOption?.label || "Relevance"}
          </Button>
        </Menu.Trigger>

        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              <For each={options}>
                {(option)=>
                  <Menu.Item value={option.value} onClick={()=>onSelectOrdering(option.value)}>
                    {option.label}
                  </Menu.Item>}
              </For>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>

      </Menu.Root>
    </>
  );
}