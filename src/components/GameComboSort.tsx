import {Button, For, Menu, Portal} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "@/store.ts";


const options = [
  { value: "", label: "Relevance" },
  { value: "-added", label: "Date added" },
  { value: "name", label: "Name" },
  { value: "-released", label: "Release date" },
  { value: "-metacritic", label: "Popularity" },
  { value: "-rating", label: "Average rating" },
];



export function GameComboSort() {
  const ordering = useGameQueryStore(store=>store.gameQuery.ordering);
  const setOrdering = useGameQueryStore(store=>store.setOrdering);

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
                  <Menu.Item value={option.value} onClick={()=>setOrdering(option.value)}>
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