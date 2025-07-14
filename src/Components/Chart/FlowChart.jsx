import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const SalesFlowChart = () => {
  const sellsData = [
    { date: "2025-07-01", sales: 35, total_products: 70, revenue: 5200, loss: 200 },
    { date: "2025-07-02", sales: 28, total_products: 60, revenue: 4800, loss: 2000 },
    { date: "2025-07-03", sales: 40, total_products: 85, revenue: 6700, loss: 5390 },
    { date: "2025-07-04", sales: 22, total_products: 40, revenue: 3200, loss: 2000 },
    { date: "2025-07-05", sales: 30, total_products: 65, revenue: 5400, loss: 180 },
    { date: "2025-07-06", sales: 18, total_products: 35, revenue: 2600, loss: 90 },
    { date: "2025-07-07", sales: 45, total_products: 95, revenue: 7400, loss: 3000 },
    { date: "2025-07-08", sales: 25, total_products: 50, revenue: 3900, loss: 130 },
    { date: "2025-07-09", sales: 33, total_products: 75, revenue: 5800, loss: 5510 },
    { date: "2025-07-10", sales: 20, total_products: 45, revenue: 3100, loss: 333},
  ];

  return (
    <div className="mt-16 flex flex-col text-center justify-center items-center">
      <h2 className="text-3xl font-bold ml-8">Shopping Center Sales Line Chart</h2>
      <LineChart width={800} height={400} data={sellsData} margin={{ top: 30,  }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sales" stroke="#f6ff00ff" />
        <Line type="monotone" dataKey="revenue" stroke="#13ef68ff" />
        <Line type="monotone" dataKey="loss" stroke="#ff0000ff" />
      </LineChart>
    </div>
  );
};

export default SalesFlowChart;

