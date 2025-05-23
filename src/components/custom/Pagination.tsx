"use client"

import { useCrypto } from "@/context/CryptoContext"
import { useDebouncedCallback } from "@/hooks/useDebounceCallback"
import { ButtonGroup, IconButton, Pagination } from "@chakra-ui/react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"

export default function PaginationNav() {

  const { setCurrentPage, setIsLoading } = useCrypto()

  const debouncedSetPage = useDebouncedCallback((page: number) => {
    setCurrentPage(page);
  }, 500, setIsLoading);
  

  // function handleClick(page: number) {
  //   setCurrentPage(page)
  // }

  return (
    <Pagination.Root count={20} pageSize={2} defaultPage={1}>
      <ButtonGroup variant="ghost" size="sm">
        <Pagination.PrevTrigger asChild>
          <IconButton>
            <LuChevronLeft />
          </IconButton>
        </Pagination.PrevTrigger>

        <Pagination.Items
          render={(page) => (
            <IconButton onClick={() => debouncedSetPage(page.value)} variant={{ base: "ghost", _selected: "outline" }}>
              {page.value}
            </IconButton>
          )}
        />

        <Pagination.NextTrigger asChild>
          <IconButton>
            <LuChevronRight />
          </IconButton>
        </Pagination.NextTrigger>
      </ButtonGroup>
    </Pagination.Root>
  )
}
