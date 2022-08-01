import React, { useEffect, useState } from 'react';
const TimeTableView=()=>{

    //const [url,setUrl]= useState([[]]);
    const [htmcode,setHTM]=useState(<div>hell</div>)
    const [val,setVal]=useState(4);
    let url,sub,c1span,b1vis,b1c1,mlurl;
    // let url= [["https://zoom.us/j/97990663010?pwd=NU5CRkJRTzF0azJnK0tLRXFyekJ4Zz09" , "control" ,"","",""],
    //                     ["em","https://zoom.us/j/93120697441?pwd=S0ViTVZLM3ZqSXAvVkcvUmF1Y2NMZz09","https://zoom.us/j/97990663010?pwd=NU5CRkJRTzF0azJnK0tLRXFyekJ4Zz09","","control"],
    //                     ["control","","em","","https://zoom.us/j/93120697441?pwd=S0ViTVZLM3ZqSXAvVkcvUmF1Y2NMZz09",""],
    //                     ["https://zoom.us/j/93120697441?pwd=S0ViTVZLM3ZqSXAvVkcvUmF1Y2NMZz09","https://zoom.us/j/97990663010?pwd=NU5CRkJRTzF0azJnK0tLRXFyekJ4Zz09","control","","em"],
    //                     ["","em","https://zoom.us/j/93120697441?pwd=S0ViTVZLM3ZqSXAvVkcvUmF1Y2NMZz09","","https://zoom.us/j/97990663010?pwd=NU5CRkJRTzF0azJnK0tLRXFyekJ4Zz09"]];

    console.log(url);
    const click=(event)=>{
        setVal(event.target.value);
        console.log(event.target.value)
        
        //set urls of all links
    }
    useEffect(()=>{
    
        console.log(val);

        c1span=3;
        b1vis='d-none';
        b1c1='T1';
        mlurl='';
        switch (val) {
            case "1":
                url=[["OS","https://zoom.us/j/94175953083?pwd=MU1yQlFQWUpRZTU2TzgxS0hab3JUZz09","","https://zoom.us/j/97316110359?pwd=YUxsYm5oZm16VGFaN1ZEQmptdHliQT09",""],
                     ["","","","","https://zoom.us/j/94175953083?pwd=MU1yQlFQWUpRZTU2TzgxS0hab3JUZz09"],
                     ["","","","https://zoom.us/j/97316110359?pwd=YUxsYm5oZm16VGFaN1ZEQmptdHliQT09",""],
                     ["","OS","https://zoom.us/j/94175953083?pwd=MU1yQlFQWUpRZTU2TzgxS0hab3JUZz09","","https://zoom.us/j/95751333219?pwd=WmY2c3krYldEWmEyNkg2MmpBQnJ2UT09"],
                     ["","","https://zoom.us/j/95751333219?pwd=WmY2c3krYldEWmEyNkg2MmpBQnJ2UT09","https://zoom.us/j/97316110359?pwd=YUxsYm5oZm16VGFaN1ZEQmptdHliQT09","OS"]];
                sub=["OS","DAA","Compiler","","","Software",""];
                c1span=2;
                b1vis="" ;
                b1c1="ML";
                mlurl="";
                console.log(url);
                break;
            case "2":
                url=[["https://zoom.us/j/92579959407?pwd=Wk5wdmo2K3FSNVVMbkR0MExtaCtsUT09","https://zoom.us/j/96031680033?pwd=Ti9vMU1neTdzRDBaYVphVXpYVUt5dz09","","",""],
                     ["","https://zoom.us/j/99671746997?pwd=UGJLSGdsejMvRTBQMHd5SDFzRjlhQT09","https://zoom.us/j/92579959407?pwd=Wk5wdmo2K3FSNVVMbkR0MExtaCtsUT09","","https://zoom.us/j/96031680033?pwd=Ti9vMU1neTdzRDBaYVphVXpYVUt5dz09"],
                     ["https://zoom.us/j/96031680033?pwd=Ti9vMU1neTdzRDBaYVphVXpYVUt5dz09","","","","https://zoom.us/j/99671746997?pwd=UGJLSGdsejMvRTBQMHd5SDFzRjlhQT09"],
                     ["https://zoom.us/j/99671746997?pwd=UGJLSGdsejMvRTBQMHd5SDFzRjlhQT09","https://zoom.us/j/92579959407?pwd=Wk5wdmo2K3FSNVVMbkR0MExtaCtsUT09","https://zoom.us/j/96031680033?pwd=Ti9vMU1neTdzRDBaYVphVXpYVUt5dz09","",""],
                     ["","","https://zoom.us/j/99671746997?pwd=UGJLSGdsejMvRTBQMHd5SDFzRjlhQT09","","https://zoom.us/j/92579959407?pwd=Wk5wdmo2K3FSNVVMbkR0MExtaCtsUT09"]];
                sub=["Envir.","","Water","BSSD","","",""];
                     console.log(url);
                break;
            case "3":
                url=[["https://zoom.us/j/95951717673?pwd=MVV1VXBsTGFRMVZrZUZtY0hqNHRqdz09","https://zoom.us/j/94353521484?pwd=YTVEd2hWOEt2YnBtWFVpZk5xck84Zz09","","https://zoom.us/j/98005135245?pwd=TSs0ME5oNm9nNG4vdm9Pcm9sM0RZUT09","https://zoom.us/j/95765155609?pwd=YzdGZi9YcVFZQ1pVa014MTVUem9GZz09"],
                     ["https://zoom.us/j/92375067308?pwd=U21yd1pqL2ROdUtQUkdrdUs4V0JIQT09","","https://zoom.us/j/98246311248?pwd=dVJyUVNDNytaMkd4M29kNi9PL1BkUT09","https://zoom.us/j/91303045909?pwd=YWZWYi9UWVcyeldrckh5NE5JcE9JQT09",""],
                     ["https://zoom.us/j/94265201337?pwd=dlVZNVo5ajFwd0QzR0E4aHIzWTlWdz09","","https://zoom.us/j/92778535798?pwd=RnhBeHUreXQ4YlhibTFaRFFrMitUQT09","https://zoom.us/j/99155885658?pwd=cFlIUFFiZ2VOWlp2VGNhSmhpNHR1dz09",""],
                     ["","https://zoom.us/j/99052946033?pwd=ZlN3OGZod25IRWQ4dXdKNTVrZGZBQT09","https://zoom.us/j/91069000114?pwd=QVR4T3htbUF2eHNsTjRCTWFZSlJoUT09","https://zoom.us/j/93931881854?pwd=NFByQXA1TGd0MHFoSTFEdjJYczUxZz09",""],
                     ["","https://zoom.us/j/99974764771?pwd=NDBJUnNHL2FXdEJNMmdjZ0ZOdDEyZz09","","https://zoom.us/j/93704957005?pwd=bzVsVURueld3UCtuanFNMGR3YTFhQT09",""]];
                sub=["Transprt","HRE","SPP","CTCE","","",""];
                     console.log(url);
                break;
            case '5':
                url=[["","","https://zoom.us/j/97150586097?pwd=TExjblZscTErTCswQkdjc1RWT01pdz09","",""],
                     ["","","","",""],
                     ["","https://zoom.us/j/97150586097?pwd=TExjblZscTErTCswQkdjc1RWT01pdz09","","",""],
                     ["","","","",""],
                     ["https://zoom.us/j/97150586097?pwd=TExjblZscTErTCswQkdjc1RWT01pdz09","","","",""]];
                console.log(url);
                sub=["HMT","Machine","DME","","MMM","",""];
                

                break;
            
            default:
                url=[["https://zoom.us/j/97990663010?pwd=NU5CRkJRTzF0azJnK0tLRXFyekJ4Zz09","control","","",""],
                        ["https://zoom.us/j/99076479015?pwd=Vm12cGszcnZpRUJwcXoyYnpsNHNHQT09","https://zoom.us/j/93120697441?pwd=S0ViTVZLM3ZqSXAvVkcvUmF1Y2NMZz09","https://zoom.us/j/97990663010?pwd=NU5CRkJRTzF0azJnK0tLRXFyekJ4Zz09","","control"],
                        ["control","","https://zoom.us/j/99076479015?pwd=Vm12cGszcnZpRUJwcXoyYnpsNHNHQT09","","https://zoom.us/j/93120697441?pwd=S0ViTVZLM3ZqSXAvVkcvUmF1Y2NMZz09",""],
                        ["https://zoom.us/j/93120697441?pwd=S0ViTVZLM3ZqSXAvVkcvUmF1Y2NMZz09","https://zoom.us/j/97990663010?pwd=NU5CRkJRTzF0azJnK0tLRXFyekJ4Zz09","control","","https://zoom.us/j/99076479015?pwd=Vm12cGszcnZpRUJwcXoyYnpsNHNHQT09"],
                        ["","https://zoom.us/j/99076479015?pwd=Vm12cGszcnZpRUJwcXoyYnpsNHNHQT09","https://zoom.us/j/93120697441?pwd=S0ViTVZLM3ZqSXAvVkcvUmF1Y2NMZz09","","https://zoom.us/j/97990663010?pwd=NU5CRkJRTzF0azJnK0tLRXFyekJ4Zz09"]];
                        sub=["Analog","Machines","Control","DSP","","",""];
                        console.log(url);
                break;
                
        }
    
    setHTM(<>
        <h1>The Time Table</h1>
        <div className="0 d-flex flex-column align-items-center">
        <select className="form-select shadow-lg" style={{width:"fit-content" , margin:"0.5vw", backgroundColor:"transparent", border:"solid white 3px" , borderRadius:"20px"}}aria-label="Default select example" onChange={click}>
            <option value="1" >Computers</option>
            <option value="2" >Civil</option>
            <option value="3">Chemical</option>
            <option value="4" selected>Electrical</option>
            <option value="5">Mechanical</option>
        </select>
            <table style={{margin:"auto"}}>
                <tr className="slots">
                  <th>---</th>
                  <th> 9:00AM</th>
                  <th> 10:00AM</th>
                  <th> 11:30AM</th>
                  <th rowSpan="6" className='lunch'>b<br/>r<br/>e<br/>a<br/>k</th>
                  <th> 12:20PM</th>
                  <th rowSpan="6" className='lunch'>b<br/>r<br/>e<br/>a<br/>k</th>
                  <th> 14:10PM</th>
                  <th> 15:10PM</th>
                  <th> 16:10PM</th>
                  <th> 17:10PM</th>
                </tr>
                <tr>
                  <td className="day">Mon</td>
                  <td className="sub a"><a href={url[0][0]}><div>{sub[0]}</div></a></td>
                  <td className="sub c"><a href={url[0][1]}><div>{sub[2]} </div></a></td>
                  <td className="sub e"><a href={url[0][2]}><div>{sub[4]}</div></a></td>
                  <td className="sub f"><a href={url[0][3]}><div>{sub[5]}</div></a></td>
                  <td className="sub g"><a href={url[0][4]}><div>{sub[6]}</div></a></td>
                  <td className="sub p1" colSpan="3">P1</td>
                  
                </tr>
                {console.log(url[0])}
                <tr>
                  <td className="day">Tue</td>
                  <td className="sub b"><a href={url[1][0]}><div>{sub[1]}</div></a></td>
                  <td className="sub d"><a href={url[1][1]}><div>{sub[3]}</div></a></td>
                  <td className="sub a"><a href={url[1][2]}><div>{sub[0]}</div></a></td>
                  <td className="sub g"><a href={url[1][3]}><div>{sub[6]}</div></a></td>
                  <td className="sub ct"><a href={url[1][4]}><div>{sub[2]}</div></a></td>
                  <td className="sub q1" colSpan="3">Q1</td>
                  
                </tr>
    
                <tr>
                  <td className="day">Wed</td>
                  <td className="sub c"><a href={url[2][0]}><div>{sub[2]}</div></a></td>
                  <td className="sub e"><a href={url[2][1]}><div>{sub[4]}</div></a></td>
                  <td className="sub b"><a href={url[2][2]}><div>{sub[1]}</div></a></td>
                  <td className="sub f"><a href={url[2][3]}><div>{sub[5]}</div></a></td>
                  <td className="sub dt"><a href={url[2][3]}><div>{sub[3]}</div></a></td>
                  <td colSpan="3" className="sem sub"> seminar</td>
                  
                </tr>
                <tr>
                  <td className="day">Thur</td>
                  <td className="sub d"><a href={url[3][0]}><div>{sub[3]}</div></a></td>
                  <td className="sub a"><a href={url[3][1]}><div>{sub[0]}</div></a></td>
                  <td className="sub c"><a href={url[3][2]}><div>{sub[2]}</div></a></td>
                  <td className="sub g"><a href={url[3][3]}><div>{sub[6]}</div></a></td>
                  <td className="sub bt"><a href={url[3][4]}><div>{sub[1]}</div></a></td>
                  <td className="sub s1" colSpan={c1span}>S1</td>
                  <td className={`sub b1 ${b1vis}`}><a href={mlurl}><div>ML</div></a></td>
                </tr>
                <tr>
                  <td className="day">Fri</td>
                  <td className="sub e"><a href={url[4][0]}><div>{sub[4]}</div></a></td>
                  <td className="sub b"><a href={url[4][1]}><div>{sub[1]}</div></a></td>
                  <td className="sub d"><a href={url[4][2]}><div>{sub[3]}</div></a></td>
                  <td className="sub f"><a href={url[4][3]}><div>{sub[5]}</div></a></td>
                  <td className="sub at"><a href={url[4][4]}><div>{sub[0]}</div></a></td>
                  <td className={`sub d1 ${b1vis}`} > </td>
                  <td className="sub b1" colSpan={c1span}><a href={mlurl}><div> {b1c1}</div></a></td>

                  <td className="sub c1 d-none"> c1</td>
                </tr>
            </table>
            </div>
            </>)},[val])
    console.log(url);



return( htmcode
)

}

export default TimeTableView;