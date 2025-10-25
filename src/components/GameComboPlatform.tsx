// import usePlatforms from "@/hooks/usePlatforms.ts";
import {Button, For, Menu, Portal, Spinner} from "@chakra-ui/react";
import usePlatforms from "@/hooks/usePlatforms.ts";
import useGameQueryStore from "@/store.ts";
import {BsChevronDown} from "react-icons/bs";



export function GameComboPlatform() {
  const platform = useGameQueryStore(store=>store.gameQuery.platform);
  const setPlatform = useGameQueryStore(store=>store.setPlatform);

  const { data, error, isLoading} = usePlatforms();

  return (
    <>
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline" size="sm">
            <BsChevronDown/>
            {platform? platform.name : "Platform"}
            {isLoading && <Spinner/>}
            {/*Platform*/}
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              { error && <Menu.Item value="ERROR_PRESERVED">{error?.message}</Menu.Item> }
              <For each={data?.results}>
                {(platform)=>
                  <Menu.Item value={platform.name} onClick={()=>setPlatform(platform)}>
                    {platform.name}
                  </Menu.Item>}
              </For>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </>
  );
}