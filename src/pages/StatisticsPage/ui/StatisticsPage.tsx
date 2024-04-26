import { Navbar } from 'widgets/Navbar'
import cls from './StatisticsPage.module.scss'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PureComponent, memo } from 'react';

const data = [
    {
      name: 'Tasks',
      Total: 5,
      Completed: 4,
      Overdue: 1,
      amt: 2400,
    },
  
];

const StatisticsPage = () => {
  return (
    <div className={cls.StatisticsPage}>
        <Navbar/>

        <h2>Your statistic:</h2>
        {/* <ResponsiveContainer width="60%" height="100%"> */}
        <BarChart
          width={700}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Total" fill="#696CFF" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="Completed" fill="#5BEC5B" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="Overdue" fill="#F74848" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      {/* </ResponsiveContainer> */}
      </div>
  )
}



export default StatisticsPage