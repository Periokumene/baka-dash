// import usePlatforms from "@/hooks/usePlatforms.ts";
import {Button, For, Menu, Portal, Spinner} from "@chakra-ui/react";
import usePlatforms from "@/hooks/usePlatforms.ts";
import type {Platform} from "@/hooks/useGames.ts";

interface Props{
  selectedPlatform: Platform | null,
  onSelectPlatform: (platform:Platform)=>void;
};

export function GameComboPlatform({selectedPlatform, onSelectPlatform} : Props) {
  const { data, error, isLoading} = usePlatforms();

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
              { error && <Menu.Item value="ERROR_PRESERVED">{error?.message}</Menu.Item> }
              <For each={data?.results}>
                {(platform)=>
                  <Menu.Item value={platform.name} onClick={()=>onSelectPlatform(platform)}>
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