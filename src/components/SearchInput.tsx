import {Input, InputGroup} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import {useRef} from "react";

interface Props{
  onChangeSearchText : (newText: string)=>void,
}

export function SearchInput({onChangeSearchText} : Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <form style={{width: "100%"}}
            onSubmit={e=>{
              e.preventDefault();
              onChangeSearchText(inputRef.current?.value || ""); }}
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