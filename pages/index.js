import React from "react";
import appConfig from "../config.json";
import { useRouter } from "next/router";
import { Box, Button, Text, TextField, Image, Link } from "@skynexui/components";

export default function mainPage(){
    const router = useRouter();

    const pTexts = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lectus metus, hendrerit a fringilla in, mattis vitae orci. Duis ornare aliquet lacinia. Mauris id tristique quam, a tempus purus. Ut consectetur nisl id euismod accumsan. Praesent velit tortor, sodales id tellus et, lobortis pulvinar purus. Nulla facilisi. Sed convallis ultricies nisl, non suscipit urna interdum vitae. Donec sollicitudin, mauris quis dictum commodo, nunc ipsum congue erat, sed finibus turpis urna at est. Morbi ultrices metus quis lorem laoreet, imperdiet euismod tortor rutrum. Curabitur eget aliquet risus, vel fringilla leo. Integer pulvinar ut leo sit amet laoreet. Maecenas ultricies rhoncus est, at gravida erat ornare vel. Fusce rhoncus non felis vel laoreet. Donec tempus nibh in tortor faucibus accumsan. Nulla vel velit orci.",
        "Cras ullamcorper rhoncus lectus nec feugiat. Aenean vitae lacus nec lacus commodo vehicula. Integer cursus sem odio, eu pharetra mauris tristique id. Pellentesque convallis ipsum a elit semper, et bibendum erat sodales. Vestibulum eu tristique purus, a congue sem. Morbi nec leo eu leo porta imperdiet in quis dui. Aenean pulvinar, urna et egestas laoreet, ante risus ornare purus, eget auctor erat arcu ullamcorper dolor.",
        "Integer consequat purus eu tincidunt aliquet. Aliquam at leo at mauris laoreet placerat a ut purus. Sed in porta sem. Aenean a libero sapien. Vivamus massa est, efficitur nec varius vel, porttitor in metus. Nulla venenatis nunc eu nunc blandit, eget vehicula orci facilisis. Nullam volutpat urna nisl, ut congue tortor eleifend a.",
        "Integer ipsum nisl, bibendum vel lobortis sit amet, gravida eget enim. Curabitur at dolor vel ligula euismod volutpat. Mauris efficitur arcu eu tellus pulvinar iaculis. Vestibulum diam neque, venenatis a consequat aliquam, posuere vel neque. Sed varius quam nec magna venenatis, at maximus arcu euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla vitae iaculis libero, non luctus diam. Phasellus nec luctus elit, eget pharetra nunc. Vivamus lorem nunc, facilisis in magna euismod, varius vestibulum metus."
    ]

    return(
        <Box
            styleSheet={{
                minWidth:"100%",
                display:"inline-block",
            }}
        >
            <Box
                id="home"
            >
                <Banner/>
            </Box>
            <NavMenu/>
            <Box
                id="intro"
                styleSheet={{
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center"
                }}
            >
                <Title text="Introdução"/>
                <ImagedParagraph
                    imgpos="left"
                    text={[pTexts[0]]}
                    imgsrc="https://picsum.photos/id/0/367/267"
                />
                <ImagedParagraph
                    imgpos="right"
                    text={[pTexts[1]]}
                    imgsrc="https://picsum.photos/id/0/367/267"
                />
                <ImagedParagraph
                    imgpos="middle"
                    text={[pTexts[2],pTexts[3]]}
                    imgsrc="https://picsum.photos/id/0/367/267"
                />
            </Box>
            <Box
                id="contatos"
            >
                <Footer/>
            </Box>
        </Box>
    );
    function Banner(){
        return (
            <Box
                styleSheet={{
                    paddingVertical:"15vh",
                    textAlign:"center",
                    backgroundColor:appConfig.theme.colors.neutrals[400],
                    color:appConfig.theme.colors.neutrals['000']
                }}
            >
                <Text
                    styleSheet={{
                        fontSize:"10vh",
                    }}
                >
                    Escolha seu Futuro!
                </Text>
            </Box>
        )
    };
    function NavMenu(){
        const navList=["FaHome","Introdução","Contatos"];
        const linkList=["#home","#intro","#contatos"];
        return (
            <Box
                tag="ul"
                styleSheet={{
                    position:"relative",
                    width:"100%",
                    display: "inline-flex",
                    flexDirection: "row-reverse",
                    textAlign:"center",
                    alignItems:"center",
                    backgroundColor:appConfig.theme.colors.neutrals[800],
                    color:appConfig.theme.colors.neutrals[200]
                }}
            >
                <NavButton id={0} link ={linkList[0]} label={navList[0]}/>
                <NavButton id={1} link ={linkList[1]} label={navList[1]}/>
                <NavButton id={2} link ={linkList[2]} label={navList[2]}/>
            </Box>
        )
    };
    function NavButton(props){
        return(
            <Box tag="li" key={props.id}>   
                <Button
                    href={props.link}
                    label={(props.label.startsWith("Fa"))?"":props.label}
                    iconName={(props.label.startsWith("Fa"))?props.label:""}
                    styleSheet={{
                        padding:"3vh 5vh",
                        margin:"1vh"
                    }}
                    buttonColors={{
                    contrastColor: appConfig.theme.colors.neutrals["000"],
                    mainColor: appConfig.theme.colors.neutrals[800],
                    mainColorLight: appConfig.theme.colors.neutrals[500],
                    mainColorStrong: appConfig.theme.colors.neutrals[500],
                    }}
                />   
            </Box>
        )
    };
    function Title(props){
        return(
            <Box>
                <Text
                    styleSheet={{
                        fontSize:"10vh",
                        padding:"3vh",
                        margin:"2vh"
                    }}
                >
                    {props.text}
                </Text>
            </Box>
        )
    }
    function ImagedParagraph(props){
        return(
            <Box
                styleSheet={{
                    display:"inline-flex",
                    width:"80%",
                    height:"20vh",
                    alignItems:"center",
                    margin:"5vh",
                    padding:"1vh",
                    justifyContent:"space-around"
                }}
            >
                {props.imgpos==="middle" && <PText text={props.text[0]}/>}
                {props.imgpos==="middle" &&
                        <PImage
                            src={props.imgsrc}
                        />
                }
                {props.imgpos==="middle" && <PText text={props.text[1]}/>}

                {props.imgpos==="left" && <PImage src={props.imgsrc}/>}
                {props.imgpos!=="middle" &&<PText text={props.text[0]}/>}
                {props.imgpos==="right" && <PImage src={props.imgsrc}/>}
            </Box>
        )
    }
    function PText(props){
        return(
            <Text
                styleSheet={{
                    margin:"1vh",
                    padding:"2vh",
                    textAlign:"center",
                    alignItems:"center",
                    justifyContent:"center"
                }}
            >
                {props.text}
            </Text>)
    }
    function PImage(props){
        return(
            <Image
            src={props.src}
            styleSheet={{
                maxWidth:"20%",
                maxHeight:"100%",
            }}
            >
            </Image>
        )
    }
    function Footer(props){
        const contactList = [
            "FaInstagram",
            "FaWhatsapp",
            "FaEnvelope"
        ];
        const linkList = [
            "#contatos",
            "#contatos",
            "mailto:escolhaseufuturosite@gmail.com"
        ];
        return(
            <Box
                tag="ul"
                styleSheet={{
                    position:"relative",
                    width:"100%",
                    height:"20vh",
                    display: "inline-flex",
                    flexDirection: "row-reverse",
                    textAlign:"center",
                    padding:"2vh",
                    backgroundColor:appConfig.theme.colors.neutrals[800],
                    color:appConfig.theme.colors.neutrals[200]
                }}
            >
                <NavButton id={3} link ={linkList[0]} label={contactList[0]}/>
                <NavButton id={4} link ={linkList[1]} label={contactList[1]}/>
                <NavButton id={5} link ={linkList[2]} label={contactList[2]}/>
            </Box>
        )
    }
}