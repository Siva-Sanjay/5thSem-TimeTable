
const TimeTableView=()=>{


    let aurl='google.com',burl='google.com',curl='google.com',durl='google.com',eurl='google.com',furl='google.com',gurl="google.com"
return(<>
    <h1>The Time Table</h1>
    <select class="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">Computers</option>
        <option value="2">Civil</option>
        <option value="3">Chemical</option>
        <option value="4">Electrical</option>
        <option value="5">Mechanical</option>
    </select>
        <table style={{width:'70%' }}>
            <tr>
              <th>---</th>
              <th> 9-9:50</th>
              <th> 10-10:50</th>
              <th> 11-11;50</th>
              <th rowspan="6">l<br/>u<br/>n<br/>c<br/>h</th>
              <th> 12:20-13:10</th>
              <th> 14:10 - 15</th>
              <th> 15:10-16</th>
              <th> 16:10-17</th>
              <th> 17:10-18</th>
            </tr>
            <tr>
              <td className="sub">Monday</td>
              <td className="sub a"><a href={aurl}><div> a</div></a></td>
              <td className="sub c"><a href={curl}><div> c</div></a></td>
              <td className="sub e"><a href={eurl}><div> e</div></a></td>
              <td className="sub f"><a href={furl}><div> f</div></a></td>
              <td className="sub g"><a href={gurl}><div> g1</div></a></td>
              <td className="sub a1"> a1</td>
              <td className="sub c1"> c1</td>
              <td className="sub d1"> d1</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td className="sub b"><a href={burl}><div> b</div></a></td>
              <td className="sub d"><a href={durl}><div> d</div></a></td>
              <td className="sub a"><a href={aurl}><div> a</div></a></td>
              <td className="sub g"><a href={gurl}><div> g</div></a></td>
              <td className="sub ct"> ct</td>
              <td className="sub b1"> b1</td>
              <td className="sub d1"> d1</td>
              <td> a1</td>
            </tr>

            <tr>
              <td>Wednesday</td>
              <td className="sub c"><a href={curl}><div> c</div></a></td>
              <td className="sub e"><a href={eurl}><div> e</div></a></td>
              <td className="sub b"><a href={burl}><div> b</div></a></td>
              <td className="sub f"><a href={furl}><div> f</div></a></td>
              <td className="sub d1"> dt</td>
              <td colSpan="3"> sem</td>
              
            </tr>
            <tr>
              <td>Thursday</td>
              <td className="sub d"><a href={durl}><div> d</div></a></td>
              <td className="sub a"><a href={aurl}><div> a</div></a></td>
              <td className="sub c"><a href={curl}><div> c</div></a></td>
              <td className="sub g"><a href={gurl}><div> g</div></a></td>
              <td className="sub bt"> bt</td>
              <td className="sub c1"> c1</td>
              <td className="sub a1"> a1</td>
              <td className="sub b1"> b1</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td className="sub e"><a href={eurl}><div> e</div></a></td>
              <td className="sub b"><a href={burl}><div> b</div></a></td>
              <td className="sub d"><a href={durl}><div> d</div></a></td>
              <td className="sub f"><a href={furl}><div> f</div></a></td>
              <td className="sub at"> at</td>
              <td className="sub d1"> d1</td>
              <td className="sub b1"> b1</td>
              <td className="sub c1"> c1</td>
            </tr>
        </table>
        </>
)

}

export default TimeTableView;