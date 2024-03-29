import React from 'react'
import { makeStyles,Typography,Divider,Box,Card,CardContent,Hidden} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import {AiFillLike} from 'react-icons/ai'



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    marginBottom:20,
    
  },
  eventCont:{
    marginBottom: 30,
  },
  
}));

export default function Suggestions() {
    const classes = useStyles();
    const [isBlue, setIsBlue] = React.useState(false)

    
    return (
        <Hidden only={['sm', 'xs','md']}>
        <div>


                       {/************partie suggestions*************** */}



     <div className="suggestions">

         <Card className={classes.root}>


              <h6 style={{color:'black',fontSize:18,marginLeft: 20,marginTop: 10,marginBottom: 10}}>Suggestions</h6>

               <Divider/>

               <CardContent  >


                       <Box style={{ marginBottom:20,  }}>

                              <Button display="flex" className={classes.eventCont}
                                  style={{padding:0,  textTransform: 'lowercase', width: 255 ,marginBottom:10  }}>

                                    <img  src={process.env.PUBLIC_URL + '/images/s2.png'} 
                                         style={{marginRight:20,borderRadius: 5,height: 50,width: 50,}} />

                                     <Typography style={{ fontSize: 19,}}>Iqonic Studio </Typography>

                              </Button>


                              <img  src={process.env.PUBLIC_URL + '/images/img8.jpg'}
                                  style={{borderRadius: 5,maxWidth: '100%',height: 'auto'}} />
                              
                              <IconButton aria-label="" style={{ marginLeft:40, marginRight: 10,borderRadius:5,}} 
                              >

                                  
                                 
                                  
                                  <AiFillLike  style={{  marginRight: 10,}}
                                   onClick={() => setIsBlue(!isBlue)} 
                                  color={isBlue ? 'blue' : 'black'}
                                
                                  />

                                   

                                  <Typography  style={{ color:'#50b5ff', }}>  Aimer la Page</Typography>

                               </IconButton>
                      </Box>

                      <Box>

                          <Button display="flex" className={classes.eventCont} 
                               style={{padding:0,  textTransform: 'lowercase', width: 255 ,marginBottom:10 }}>

                                <img  src={process.env.PUBLIC_URL + '/images/logo2.jpg'}
                                    style={{marginRight:20,borderRadius: 5,height: 50,width: 50}} />

                                <Typography style={{ fontSize: 19, }}>Iqonic Studio </Typography>

                          </Button>

                          <img  src={process.env.PUBLIC_URL + '/images/s1.jpg'} 
                                style={{borderRadius: 5,maxWidth: '100%',height: 'auto'}} />
                        
                        <IconButton aria-label="" style={{ marginLeft:40, marginRight: 10,borderRadius:5,}} 
                              >

                                  
                                 
                                  
                                  <AiFillLike  style={{  marginRight: 10,}}
                                   onClick={() => setIsBlue(!isBlue)} 
                                  color={isBlue ? 'blue' : 'black'}
                                
                                  />

                                   

                                  <Typography  style={{ color:'#50b5ff', }}>  Aimer la Page</Typography>

                         </IconButton>

                      </Box>
                    
              </CardContent>
                      
                      
        </Card>

    </div>

                                {/***********partie événements*************** */}



        {/**     <div className="events">
            <Card className={classes.root}>



            <h6 style={{color:'black',fontSize:18,marginLeft: 20,marginTop: 10,marginBottom: 10}}>Evenements</h6>
     <Divider/>
      <CardContent >
      <Button display="flex" className={classes.eventCont} style={{  textTransform: 'lowercase', width: 255 ,
              }}>
          <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/images/e1.jpg'}  style={{ marginRight: 25,width: 55,
    height: 55,borderStyle: 'solid', borderColor:'#d9d8d7f5', borderWidth:2,
              }} />
          <Typography style={{ fontSize: 19,
              }}>Web Workshop <br/>
          <small style={{ fontSize: 14, color:'gray'
              }}> Il y'a 1 Heur</small>
          </Typography>

      </Button>
      
      <Button display="flex" className={classes.eventCont} style={{  textTransform: 'lowercase',width: 255
              }}>
          <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/images/e2.jpg'}  style={{ marginRight: 25,width: 55,
    height: 55,borderStyle: 'solid', borderColor:'#d9d8d7f5', borderWidth:2,
              }} />
          <Typography style={{ fontSize: 19,
              }}>Web Workshop <br/>
          <small style={{ fontSize: 14, color:'gray'
              }}> Il y'a 1 Heur</small>
          </Typography>

      </Button>

      </CardContent>
      
      
    </Card>
    </div>
*/} 




        </div>
        </Hidden>
    )
}
