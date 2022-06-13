import {table_heading, hourly_sales} from '../../data.js';
function ReportTable(props) {
  return (
    <table className="table-auto w-3/4 my-9 rounded-lg bg-[#D15C51] ">
        <thead>
        <tr>
            {table_heading.map((heading) => (
            <th className="text-white text-center p-2">
                {heading}
            </th>
            ))}
        </tr>
        </thead>
        <tbody>
        {props.report.map((data) => {
            return (
            <>
                <tr className="text-white text-center p-2">
                <td>{data.location}</td>
                {hourly_sales.map(sales => (<td>{sales}</td>))}
                <td>{ hourly_sales.reduce((total, sales) => total += sales, 0) }</td>
                </tr>
            </>
            );
        })}
        </tbody>
        <tfoot className="text-white text-center p-4">
            <td>Totals</td>
            {hourly_sales.map((data) => {
            return (
                <>
                <td>{(data*(props.report.length))}</td>
                </>
            );
            })}
            <td>{ hourly_sales.reduce((total, sales) => total += sales*props.report.length, 0) }</td>
        </tfoot>
    </table>
    );  
}

export default ReportTable