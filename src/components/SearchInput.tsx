import {Input, InputGroup} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import {useRef} from "react";
import useGameQueryState from "@/store.ts";



export function SearchInput() {
  // 这是一种精准订阅，实际上我们也可以直接 useGameQueryState().setSearchText("")
  // 但这样会导致所有的State全都被订阅，造成频繁更新
  // 通过传入一个选择器Callback的方式（尽管这个写法真tm绕）可以只订阅特定state
  // 获取多个需要使用shallow
  const setSearchText = useGameQueryState(store=>store.setSearchText);

  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <form style={{width: "100%"}}
            onSubmit={e=>{
              e.preventDefault();
              setSearchText(inputRef.current?.value || ""); }}
      >
        <InputGroup startElement={<BsSearch/>}>
          <Input ref={inputRef}
                 placeholder="Seach for something..."
                 // onSubmit={e=>{
                 //   e.preventDefault();
                 //   onChangeSearchText(inputRef.current?.value || ""); }}
          />
        </InputGroup>
      </form>
    </>
  );
}