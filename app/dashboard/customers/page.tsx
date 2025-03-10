import { fetchFilteredCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customers",
};

const customers = await fetchFilteredCustomers("");

export default function Page() {
  return (
    <main>
      <CustomersTable customers={customers} />
    </main>
  );
}
