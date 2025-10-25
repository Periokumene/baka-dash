// import usePlatforms from "@/hooks/usePlatforms.ts";
import {Button, For, Menu, Portal, Spinner} from "@chakra-ui/react";
import usePlatforms from "@/hooks/usePlatforms.ts";
import type {Platform} from "@/hooks/useGames.ts";

interface Props{
  selectedPlatform: Platform | null,
  onSelectPlatform: (platform:Platform)=>void;
};

export function GamePlatformMenu({selectedPlatform, onSelectPlatform} : Props) {
  const { datas, error, isLoading} = usePlatforms();

  return (
    <>
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline" size="sm">
            {selectedPlatform? selectedPlatform.name : "Platform"}
            {isLoading && <Spinner/>}
            {/*Platform*/}
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              { error && <Menu.Item value="ERROR_PRESERVED">{error}</Menu.Item> }
              <For each={datas}>
                {(data)=>
                  <Menu.Item value={data.name} onClick={()=>onSelectPlatform(data)}>
                    {data.name}
                  </Menu.Item>}
              </For>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </>
  );
}