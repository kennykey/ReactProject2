import LayOut from "../Component/LayOut"
import { Chart as ChartJS,
                BarElement,
                CategoryScale,
                LinearScale,
                Tooltip,
                Legend,
                ArcElement,
                Title,
                PointElement,
                LineElement
 } from "chart.js";
import { Bar,Doughnut,Line } from "react-chartjs-2";

//line chart
ChartJS.register(
    Title,
    PointElement,
    LineElement
    // CategoryScale,
    // LinearScale,
    // Tooltip,
    // Legend
)

// Chart pie
ChartJS.register(
    ArcElement,
    // Tooltip,
    // Legend
)

// Chart bar
ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)

const Chart = () => {

    const data={
        labels: ["12-18 Years", "19-27 Years", "28-40 Years", "40-60 Years"],
        datasets: [
            {
                label: "User",
                data: [50, 80, 60, 20],
                backgroundColor: 'aqua',
                borderWidth: 1,
            },
            {
                label: "New User",
                data: [12, 19, 3, 5],
                backgroundColor: 'gray',
                borderWidth: 1,
            },
        ],
    }

    const data1={
        labels: ["12-18 Years", "19-27 Years", "28-40 Years", "40-60 Years"],
        datasets: [
            {
                label: "New User",
                data: [50, 80, 60, 20],
                backgroundColor: ['aqua', 'yellow', 'black', 'red'],borderWidth: 5, borderRadius: 5
            },
        ]
    }

    const data2={
        labels: ["January", "February", "March", "April"],
        datasets: [
            {
                label: "User",
                data: [50, 80, 20, 40],
                backgroundColor: 'aqua',
                fill: false,
                tension: 0.4,
                borderColor: 'gray',
            },
        ]
    }

    return ( 
        <LayOut>
            <div className="container-lg">
                <div className="row justify-content-center d-flex align-items-center text-center m-2">
                    <div className="border p-5">
                         <Line data={data2} />
                    </div>
                </div>
                <div className="row m-2">
                    <div className="col-md-6 justify-content-center d-flex align-items-center border p-5">
                        <Bar data={data}/>
                    </div>
                    <div className="col-md-6 justify-content-center d-flex align-items-center border p-5">
                        <Doughnut data={data1}/>
                    </div>
                </div>
            </div>
        </LayOut>
     );
}
 
export default Chart;