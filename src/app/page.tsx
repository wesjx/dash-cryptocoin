import CardCurrentPrice from "@/components/custom/CardCurrentPrice";
import CardHighPrice from "@/components/custom/CardHighPrice";
import CardLowPrice from "@/components/custom/CardLowPrice";
import ChartMain from "@/components/custom/Chart";
import PaginationNav from "@/components/custom/Pagination";
import SegmentedCurrency from "@/components/custom/SegmentedCurrency";
import TableMain from "@/components/custom/Table";
import { Flex } from "@chakra-ui/react";

export default async function Home() {

  return (
    <>
      <Flex
        direction="row"
        align="center"
        justify="center"
        gap="2rem"
        p="2rem"
      >
        <CardCurrentPrice />
        <CardHighPrice />
        <CardLowPrice />
      </Flex>

      <div className="table-body">
        <SegmentedCurrency />
        <TableMain />
        <PaginationNav />
      </div>
      <ChartMain />
    </>
  );
}
