import CardCurrentPrice from "@/components/custom/CardCurrentPrice";
import CardHighPrice from "@/components/custom/CardHighPrice";
import CardLowPrice from "@/components/custom/CardLowPrice";
import CardName from "@/components/custom/CardName";
import ChartMain from "@/components/custom/Chart";
import PaginationNav from "@/components/custom/Pagination";
import SegmentedCurrency from "@/components/custom/SegmentedCurrency";
import TableMain from "@/components/custom/Table";

export default async function Home() {

  return (
    <>
      <div className="cards-container">
        <CardCurrentPrice />
        <CardHighPrice />
        <CardLowPrice />
      </div>

      <div className="table-body">
        <SegmentedCurrency />
        <TableMain />
        <PaginationNav />
      </div>

      <CardName/>
      <ChartMain />
    </>
  );
}
