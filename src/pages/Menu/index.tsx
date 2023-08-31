import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";

import bolo from '../../../assets/bolo.jpg';
import logo from '../../../assets/logo.png';
import macaron from '../../../assets/macaron.jpg';

const width = Dimensions.get('screen').width;

export default function Menu (){
    return <>
    <Image source={logo} style={estilos.logo} />
    <View style= {estilos.fundo}>
        <Text style= {estilos.bemvindo}>Bem Vindo(a)</Text>
        <Text style= {estilos.bemvindo2}>ao site da confeitaria que adoça sua vida!!</Text>

        <View style= {estilos.fundocard}>
            <View style= {estilos.card}>
                <Image style= {estilos.imgcard} source={bolo}/>
                <Text style= {estilos.titcard}>Bolos Recheados</Text>
                <Text style= {estilos.descard}>A partir de R$ 50,00</Text>
            </View>

            <View style= {estilos.card}>
                <Image style= {estilos.imgcard} source={macaron}/>
                <Text style= {estilos.titcard}>Macarons</Text>
                <Text style= {estilos.descard}>A partir de R$ 20,00</Text>
            </View>
        </View>

        <Text style={estilos.descricao}>Uma cesta com os melhores de nossos produtos, perfeita para presentear alguém especial!
        </Text>
        <Text>R$ 80,00</Text>
    </View>
    </>
}

const estilos = StyleSheet.create({
    logo: {
        width: "100%",
        height: 400 / 700 * width,
    },

    fundo: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "#525252",
        height: "100%",
    },

    bemvindo: {
        fontSize: 20,
        fontWeight: "bold",
        lineHeight: 24,
        width: "100%",
        textAlign: "center",
        color: "#EFEFEF",
        paddingTop: 25,
    },

    bemvindo2: {
        fontSize: 13,
        fontWeight: "bold",
        lineHeight: 24,
        width: "100%",
        textAlign: "center",
        color: "#EFEFEF",
        padding: 15,
        paddingTop: 3,
    },

    fundocard:{
        flexDirection: "row",
    },

    card: {
        width: "47%",
        height: 215,
        backgroundColor: "#C5D1F6",
        borderRadius: 10,
        padding: 10,
    },

    imgcard: {
        width: "99%",
        height: 140,
        borderRadius: 10,
    },

    titcard: {
        fontSize: 18,
        fontWeight: "bold",
        lineHeight: 18,
        width: "99%",
        textAlign: "center",
        color: "#323131",
        paddingTop: 16,
    },

    descard: {
        fontSize: 12,
        fontWeight: "bold",
        lineHeight: 18,
        width: "99%",
        textAlign: "center",
        color: "#8D5AF4",
        paddingTop: 4,
    },





    
    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        lineHeight: 26,
        width: "100%",
        textAlign: "center",
        color: "white",
        position: "absolute",
        padding: 16
    },
       titulocarrinho:  {
           fontSize : 26,
           lineHeight: 42,
           color: "#464646"
       },

       

       nomeFazenda: {
         fontSize: 16,
         lineHeight: 26,
         marginLeft: 12,
         fontWeight: "bold"
        },

        imagemFazenda: {
            width: 32,
            height: 32
        },

        fazenda:{
            flexDirection: "row",
            paddingVertical: 12
        },
        descricao:{
            color: "A3A3A3",
            fontStyle: "italic"
        },

        preco: {
           fontSize: 26,
           lineHeight: 42,
           color: "#2A9F85",
           marginTop: 8

        }
  })