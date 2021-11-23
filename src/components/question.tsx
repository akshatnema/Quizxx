import { type } from 'os';
import React from 'react';
import Button from '@mui/material/Button';

type Props = {
    question: string;
    answer: string[];
    callback:any;
    userAnswer:any;
    questionr:number;
    totalquestions:number;
}


const Question: React.FC<Props> = ({question, answer,callback,userAnswer,questionr,totalquestions}) => {
    return (
        <div>
           <p>
               Question: {questionr}/{totalquestions}
           </p>
           <p dangerouslySetInnerHTML={{__html:question}} />
           <div>
               {answer.map(answer =>(
                   <div> 
                     <Button disabled={userAnswer}>\
                       <span dangerouslySetInnerHTML={{__html:answer}} />
                     </Button>
                     
                   </div>
               ))}
           </div>
        </div>
    )
}

export default Question;