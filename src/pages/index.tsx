import Layout from "@components/Layout/layout";
import { userDummy } from "src/data/dummy.js";
import { useState } from "react";

export default function Home() {
  return (
    <Layout>
      <div
        id="BillSection"
        className="inline w-full  bg-secondary-100 p-[55px] h-full "
      >
        <div className="flex flex-col ">
          <h1 className="text-[48px] leading-[56px] text-primary-700 font-bold font-heading">
            Billing profile details
          </h1>
          <TableWrapper title="Billing information">
            <div className="mt-[24px]">
              {/* map object userDummy*/}
              {Object.entries(userDummy).map(([key, value]) => (
                <div key={key + value} className="flex mt-[24px] ">
                  <p className="text-primary-700 font-bold w-[25%]">{key}</p>
                  <p className="text-primary-700 w-[32%]">{value}</p>
                </div>
              ))}
              <div className="flex  mt-[44px]">
                <button className="py-[12px] px-[24px] rounded-[4px] bg-primary-700 text-white hover:opacity-90">
                  <p className="font-bold">Change credit Card</p>
                </button>
                <button className="py-[12px] px-[24px] ml-[24px] rounded-[4px] bg-primary-700 text-white hover:opacity-90">
                  <p className="font-bold">Edit billing information</p>
                </button>
              </div>
            </div>
          </TableWrapper>
          <TableWrapper title="Projects on this profile">
            <table className="border-collapse w-full table-fixed">
              <thead>
                <tr className="text-left  ">
                  <th className="py-[15px]">Project</th>
                  <th>Product</th>
                  <th>Last update</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lexir</td>
                  <td>Lorem impsum 48</td>
                  <td>€19.25/month</td>
                </tr>
              </tbody>
            </table>
          </TableWrapper>
          <TableWrapper title="Projects on this profile">
            <table className="border-separate w-full table-fixed">
              <thead>
                <tr className="text-left ">
                  <th className="py-[15px]  border-primary-700">Invoice #</th>
                  <th>Invoice date</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-[15px]">LXY-588-889</td>
                  <td>01 Sep, 2022</td>
                  <td>€199.25</td>
                  <td>Paid</td>
                  <td>
                    <button className="py-[6px] px-[26px] rounded-[4px] text-[14px] bg-primary-700 text-white hover:opacity-90">
                      Request PDF
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="py-[15px]">LXY-588-889</td>
                  <td>01 Sep, 2022</td>
                  <td>€199.25</td>
                  <td>Paid</td>
                  <td>
                    <button className="py-[6px] px-[26px] text-[14px]  rounded-[4px] bg-primary-700 text-white hover:opacity-90">
                      Request PDF
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="py-[15px]">LXY-588-889</td>
                  <td>01 Sep, 2022</td>
                  <td>€199.25</td>
                  <td>Refunded</td>
                  <td>
                    <button className="py-[6px] px-[26px]  text-[14px] rounded-[4px]  bg-primary-700 text-white hover:opacity-90">
                      Request PDF
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </TableWrapper>
        </div>
      </div>
    </Layout>
  );
}

function TableWrapper({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col mt-[40px] p-[40px] border border-secondary-200 ">
      <h1 className="text-primary-700 text-[24px] font-bold">{title}</h1>
      <div className="w-full h-[1px] mt-[24px] bg-secondary-200" />
      {children}
    </div>
  );
}
