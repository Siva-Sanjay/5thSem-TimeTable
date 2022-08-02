import React, { useEffect, useState } from 'react';
const TimeTableView=()=>{

    
    const [htmcode,setHTM]=useState(<h1>No Hurry, Just wait a sec</h1>)
    const [val,setVal]=useState(4);
    let url,sub,s1Colspan,b1vis,b1,mlurl,GFslot;

    const click=(event)=>{
        setVal(event.target.value);
    }

    useEffect(()=>{
    
        console.log(val);
        //setting default val
        s1Colspan=3;
        b1vis='d-none';
        b1='T1';
        mlurl='';

        switch (val) {

            case "1": 
            //COMPUTER SCIENCES
                url=[["https://zoom.us/j/93988463459?pwd=RlRCWlFFQlQzaDFQTFU3UmZ4LzhZdz09","https://zoom.us/j/94175953083?pwd=MU1yQlFQWUpRZTU2TzgxS0hab3JUZz09","","https://zoom.us/j/97316110359?pwd=YUxsYm5oZm16VGFaN1ZEQmptdHliQT09",""],
                     ["https://zoom.us/j/95751333219?pwd=WmY2c3krYldEWmEyNkg2MmpBQnJ2UT09","","https://zoom.us/j/93988463459?pwd=RlRCWlFFQlQzaDFQTFU3UmZ4LzhZdz09","","https://zoom.us/j/94175953083?pwd=MU1yQlFQWUpRZTU2TzgxS0hab3JUZz09"],
                     ["https://zoom.us/j/94175953083?pwd=MU1yQlFQWUpRZTU2TzgxS0hab3JUZz09","","","https://zoom.us/j/97316110359?pwd=YUxsYm5oZm16VGFaN1ZEQmptdHliQT09",""],
                     ["","https://zoom.us/j/93988463459?pwd=RlRCWlFFQlQzaDFQTFU3UmZ4LzhZdz09","https://zoom.us/j/94175953083?pwd=MU1yQlFQWUpRZTU2TzgxS0hab3JUZz09","","https://zoom.us/j/95751333219?pwd=WmY2c3krYldEWmEyNkg2MmpBQnJ2UT09"],
                     ["","https://zoom.us/j/95751333219?pwd=WmY2c3krYldEWmEyNkg2MmpBQnJ2UT09","","https://zoom.us/j/97316110359?pwd=YUxsYm5oZm16VGFaN1ZEQmptdHliQT09","https://zoom.us/j/93988463459?pwd=RlRCWlFFQlQzaDFQTFU3UmZ4LzhZdz09"]];
                sub=["OS","DAA","Compiler","","","Software",""];
                GFslot="12:50";
                s1Colspan=2;
                b1vis="" ;
                b1="ML";
                mlurl="";
                break;

            case "2":
            //CIVIL 
                url=[["https://zoom.us/j/92579959407?pwd=Wk5wdmo2K3FSNVVMbkR0MExtaCtsUT09","https://zoom.us/j/96031680033?pwd=Ti9vMU1neTdzRDBaYVphVXpYVUt5dz09","","",""],
                     ["","https://zoom.us/j/99671746997?pwd=UGJLSGdsejMvRTBQMHd5SDFzRjlhQT09","https://zoom.us/j/92579959407?pwd=Wk5wdmo2K3FSNVVMbkR0MExtaCtsUT09","","https://zoom.us/j/96031680033?pwd=Ti9vMU1neTdzRDBaYVphVXpYVUt5dz09"],
                     ["https://zoom.us/j/96031680033?pwd=Ti9vMU1neTdzRDBaYVphVXpYVUt5dz09","","","","https://zoom.us/j/99671746997?pwd=UGJLSGdsejMvRTBQMHd5SDFzRjlhQT09"],
                     ["https://zoom.us/j/99671746997?pwd=UGJLSGdsejMvRTBQMHd5SDFzRjlhQT09","https://zoom.us/j/92579959407?pwd=Wk5wdmo2K3FSNVVMbkR0MExtaCtsUT09","https://zoom.us/j/96031680033?pwd=Ti9vMU1neTdzRDBaYVphVXpYVUt5dz09","","/"],
                     ["","","https://zoom.us/j/99671746997?pwd=UGJLSGdsejMvRTBQMHd5SDFzRjlhQT09","","https://zoom.us/j/92579959407?pwd=Wk5wdmo2K3FSNVVMbkR0MExtaCtsUT09"]];
                sub=["Envir.","","Water","BSSD","","",""];
                GFslot="12:50";
                break;

            case "3":
            //CHEMICAL
                url=[["https://zoom.us/j/95951717673?pwd=MVV1VXBsTGFRMVZrZUZtY0hqNHRqdz09","https://zoom.us/j/94353521484?pwd=YTVEd2hWOEt2YnBtWFVpZk5xck84Zz09","","https://zoom.us/j/98005135245?pwd=TSs0ME5oNm9nNG4vdm9Pcm9sM0RZUT09","https://zoom.us/j/95765155609?pwd=YzdGZi9YcVFZQ1pVa014MTVUem9GZz09"],
                     ["https://zoom.us/j/92375067308?pwd=U21yd1pqL2ROdUtQUkdrdUs4V0JIQT09","","https://zoom.us/j/98246311248?pwd=dVJyUVNDNytaMkd4M29kNi9PL1BkUT09","https://zoom.us/j/91303045909?pwd=YWZWYi9UWVcyeldrckh5NE5JcE9JQT09",""],
                     ["https://zoom.us/j/94265201337?pwd=dlVZNVo5ajFwd0QzR0E4aHIzWTlWdz09","","https://zoom.us/j/92778535798?pwd=RnhBeHUreXQ4YlhibTFaRFFrMitUQT09","https://zoom.us/j/99155885658?pwd=cFlIUFFiZ2VOWlp2VGNhSmhpNHR1dz09",""],
                     ["","https://zoom.us/j/99052946033?pwd=ZlN3OGZod25IRWQ4dXdKNTVrZGZBQT09","https://zoom.us/j/91069000114?pwd=QVR4T3htbUF2eHNsTjRCTWFZSlJoUT09","https://zoom.us/j/93931881854?pwd=NFByQXA1TGd0MHFoSTFEdjJYczUxZz09",""],
                     ["","https://zoom.us/j/99974764771?pwd=NDBJUnNHL2FXdEJNMmdjZ0ZOdDEyZz09","","https://zoom.us/j/93704957005?pwd=bzVsVURueld3UCtuanFNMGR3YTFhQT09",""]];
                sub=["Transprt","HRE","SPP","CTCE","","",""];
                GFslot="12:20";
                break;

            case '5':
            //MECHANICAL
                url=[["https://zoom.us/j/93465335827?pwd=dTNRa0c1enVid2lnOHlkRzNOc1lKQT09","","https://zoom.us/j/97150586097?pwd=TExjblZscTErTCswQkdjc1RWT01pdz09","",""],
                     ["","","","",""],
                     ["","https://zoom.us/j/97150586097?pwd=TExjblZscTErTCswQkdjc1RWT01pdz09","https://zoom.us/j/92119553350?pwd=Zjg5dG9oejNPNEFETmF1b2ptWXZ0UT09","",""],
                     ["","","","",""],
                     ["https://zoom.us/j/97150586097?pwd=TExjblZscTErTCswQkdjc1RWT01pdz09","https://zoom.us/j/92621859454?pwd=cWVidTJFbmpBUXdrKzE2MFJrRVNtUT09","","",""]];
                sub=["HMT","Machine","DME","","MMM","",""];
                GFslot="12:20";
                break;
            
            default:
            //ELECTRICAL
                url=[["https://zoom.us/j/97990663010?pwd=NU5CRkJRTzF0azJnK0tLRXFyekJ4Zz09","control","","",""],
                        ["https://zoom.us/j/99076479015?pwd=Vm12cGszcnZpRUJwcXoyYnpsNHNHQT09","https://zoom.us/j/93120697441?pwd=S0ViTVZLM3ZqSXAvVkcvUmF1Y2NMZz09","https://zoom.us/j/97990663010?pwd=NU5CRkJRTzF0azJnK0tLRXFyekJ4Zz09","","control"],
                        ["control","","https://zoom.us/j/99076479015?pwd=Vm12cGszcnZpRUJwcXoyYnpsNHNHQT09","","https://zoom.us/j/93120697441?pwd=S0ViTVZLM3ZqSXAvVkcvUmF1Y2NMZz09",""],
                        ["https://zoom.us/j/93120697441?pwd=S0ViTVZLM3ZqSXAvVkcvUmF1Y2NMZz09","https://zoom.us/j/97990663010?pwd=NU5CRkJRTzF0azJnK0tLRXFyekJ4Zz09","control","","https://zoom.us/j/99076479015?pwd=Vm12cGszcnZpRUJwcXoyYnpsNHNHQT09"],
                        ["","https://zoom.us/j/99076479015?pwd=Vm12cGszcnZpRUJwcXoyYnpsNHNHQT09","https://zoom.us/j/93120697441?pwd=S0ViTVZLM3ZqSXAvVkcvUmF1Y2NMZz09","","https://zoom.us/j/97990663010?pwd=NU5CRkJRTzF0azJnK0tLRXFyekJ4Zz09"]];
                sub=["Analog","Machines","Control","DSP","","",""];
                GFslot="12:20";
                break;
                
        }
    
        setHTM(<>
                <h1>The Time Table</h1>
                <div className="d-flex flex-column align-items-center">
                    <select className="form-select dropdow" aria-label="Default select example" onChange={click}>
                        <option value="1" >Computers</option>
                        <option value="2" >Civil</option>
                        <option value="3">Chemical</option>
                        <option value="4" selected>Electrical</option>
                        <option value="5">Mechanical</option>
                    </select>

                    <table style={{margin:"auto"}}>

                            <tr className="slots">
                              <th></th>
                              <th> 9:00AM</th>
                              <th> 10:00AM</th>
                              <th> 11:00AM</th>
                              <th rowSpan="6" className='lunch'>B<br/>r<br/>e<br/>a<br/>k</th>
                              <th> {GFslot}PM</th>
                              <th rowSpan="6" className='lunch'>B<br/>r<br/>e<br/>a<br/>k</th>
                              <th> 02:10PM</th>
                              <th> 03:10PM</th>
                              <th> 04:10PM</th>
                              <th> 05:10PM</th>
                            </tr>

                            <tr>
                              <td className="day">Mon</td>
                              <td className="sub a"><a href={url[0][0]} target="_blank"><div>{sub[0]}</div></a></td>
                              <td className="sub c"><a href={url[0][1]} target="_blank"><div>{sub[2]} </div></a></td>
                              <td className="sub e"><a href={url[0][2]} target="_blank"><div>{sub[4]}</div></a></td>
                              <td className="sub f"><a href={url[0][3]} target="_blank"><div>{sub[5]}</div></a></td>
                              <td className="sub g"><a href={url[0][4]} target="_blank"><div>{sub[6]}</div></a></td>
                              <td className="sub p1" colSpan="3">P1</td>
                            </tr>
                          
                            <tr>
                              <td className="day">Tue</td>
                              <td className="sub b"><a href={url[1][0]} target="_blank"><div>{sub[1]}</div></a></td>
                              <td className="sub d"><a href={url[1][1]} target="_blank"><div>{sub[3]}</div></a></td>
                              <td className="sub a"><a href={url[1][2]} target="_blank"><div>{sub[0]}</div></a></td>
                              <td className="sub g"><a href={url[1][3]} target="_blank"><div>{sub[6]}</div></a></td>
                              <td className="sub ct"><a href={url[1][4]} target="_blank"><div>{sub[2]}</div></a></td>
                              <td className="sub q1" colSpan="3">Q1</td>
                            </tr>
                
                            <tr>
                              <td className="day">Wed</td>
                              <td className="sub c"><a href={url[2][0]} target="_blank"><div>{sub[2]}</div></a></td>
                              <td className="sub e"><a href={url[2][1]} target="_blank"><div>{sub[4]}</div></a></td>
                              <td className="sub b"><a href={url[2][2]} target="_blank"><div>{sub[1]}</div></a></td>
                              <td className="sub f"><a href={url[2][3]} target="_blank"><div>{sub[5]}</div></a></td>
                              <td className="sub dt"><a href={url[2][3]} target="_blank"><div>{sub[3]}</div></a></td>
                              <td colSpan="3" className="sem sub"> seminar</td>
                            </tr>

                            <tr>
                              <td className="day">Thur</td>
                              <td className="sub d"><a href={url[3][0]} target="_blank"><div>{sub[3]}</div></a></td>
                              <td className="sub a"><a href={url[3][1]} target="_blank"><div>{sub[0]}</div></a></td>
                              <td className="sub c"><a href={url[3][2]} target="_blank"><div>{sub[2]}</div></a></td>
                              <td className="sub g"><a href={url[3][3]} target="_blank"><div>{sub[6]}</div></a></td>
                              <td className="sub bt"><a href={url[3][4]} target="_blank"><div>{sub[1]}</div></a></td>
                              <td className="sub s1" colSpan={s1Colspan}>S1</td>
                              <td className={`sub b1 ${b1vis}`}><a href={mlurl} target="_blank"><div>ML</div></a></td>
                            </tr>


                            <tr>
                              <td className="day">Fri</td>
                              <td className="sub e"><a href={url[4][0]} target="_blank"><div>{sub[4]}</div></a></td>
                              <td className="sub b"><a href={url[4][1]} target="_blank"><div>{sub[1]}</div></a></td>
                              <td className="sub d"><a href={url[4][2]} target="_blank"><div>{sub[3]}</div></a></td>
                              <td className="sub f"><a href={url[4][3]} target="_blank"><div>{sub[5]}</div></a></td>
                              <td className="sub at"><a href={url[4][4]} target="_blank"><div>{sub[0]}</div></a></td>
                              <td className={`sub d1 ${b1vis}`} > </td>
                              <td className="sub b1" colSpan={s1Colspan} ><a href={mlurl} target="_blank"><div>{b1}</div></a></td>

                              <td className="sub c1 d-none">c1</td>
                            </tr>
                    </table>
                </div>
              </>)

         },[val])
    console.log(url);



return( htmcode)

}

export default TimeTableView;