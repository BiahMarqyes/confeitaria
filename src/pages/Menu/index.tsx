import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";

import bolo from '../../../assets/bolo.jpg';
import logo from '../../../assets/logo.png';
import macaron from '../../../assets/macaron.jpg';
import brownie from '../../../assets/brownie.jpg';
import brigadeiro from '../../../assets/brigadeiro.jpg';

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

            <View style= {estilos.card2}>
                <Image style= {estilos.imgcard} source={macaron}/>
                <Text style= {estilos.titcard}>Macarons</Text>
                <Text style= {estilos.descard}>A partir de R$ 20,00</Text>
            </View>
        </View>

        <View style= {estilos.fundocard}>
            <View style= {estilos.card}>
                <Image style= {estilos.imgcard} source={brownie}/>
                <Text style= {estilos.titcard}>Brownie</Text>
                <Text style= {estilos.descard}>A partir de R$ 15,00</Text>
            </View>

            <View style= {estilos.card2}>
                <Image style= {estilos.imgcard} source={brigadeiro}/>
                <Text style= {estilos.titcard}>Brigadeiro</Text>
                <Text style= {estilos.descard}>A partir de R$ 10,00</Text>
            </View>
        </View>
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
        paddingTop: 15,
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
        marginBottom: "5%",
    },

    card2: {
        width: "47%",
        height: 215,
        backgroundColor: "#C5D1F6",
        borderRadius: 10,
        padding: 10,
        marginBottom: "5%",
        marginLeft: "5%",
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

})