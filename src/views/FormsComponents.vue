<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>
                    Formularios
                </ion-title>
            </ion-toolbar>
        </ion-header>
        <!--contenido-->
        <ion-content>
            <ion-grid>
                <!--fila-->
                <ion-row>
                    <!--columna-->
                    <ion-col>
                        <h1>Input</h1>
                        <ion-input label="Nombre" label-placement="floating" placeholder="Escriba su nombre" maxlength="15" :counter="true" :clear-input="true" fill="Outline" color="danger" v-model="nombre"></ion-input>
                        
                        <br><br><br><hr>
                        <h1>Select</h1>
                        <ion-select label="Departamento" placeholder="Seleccione" label-placement="stacked" v-model="departamento">
                            <ion-select-option value="La Libertad">
                                La Libertad
                            </ion-select-option>
                            <ion-select-option value="San Salvador">
                                San Salvador
                            </ion-select-option>
                            <ion-select-option value="Santa Ana">
                                Santa Ana
                            </ion-select-option>
                        </ion-select>
                        
                        <br><br><hr>
                        <h1>Checkbox</h1>
 
                        <ion-checkbox label-placement="end" color="primary" value="NintendoSwitch" v-model="consolas[0]"> Nintendo Switch
                        </ion-checkbox><br>
 
                        <ion-checkbox label-placement="end" color="primary" value="XboxS" v-model="consolas[1]"> Xbox Series S
                        </ion-checkbox><br>
 
                        <ion-checkbox label-placement="end" color="primary" value="XboxX" v-model="consolas[2]"> Xbox Series X
                        </ion-checkbox><br>
 
                        <ion-checkbox label-placement="end" color="primary" value="PlayStation" v-model="consolas[3]"> PlayStation
                        </ion-checkbox><br>
 
                        <ion-checkbox label-placement="end" color="primary" value="PCMasterRace" checked="true" v-model="consolas[4]"> PC Master Race
                        </ion-checkbox><br>

                        <br><br><br><hr>
                        <h1>Radio Button</h1>
                        <ion-radio-group allow-empty-selction="true" v-model="genero">
                            <ion-radio value="Hombre" label-placement="end" color="primary">Hombre</ion-radio>
                            <ion-radio value="Mujer" label-placement="end" color="primary">Mujer</ion-radio>
                        </ion-radio-group>

                        <br><br><br><hr>
                        <h1>Boton</h1>
                        <ion-button color="dark" expand="block" shape="round" @click="imprimirDatos">Guardar</ion-button>
                    </ion-col>
                </ion-row>

                <ion-row>
                    <ion-col>
                        <h2>IMPRESION</h2>
                        <div v-html="datos"></div>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>


<script>
    import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonRow, IonCol, IonInput, IonSelect,
            IonSelectOption, IonCheckbox, IonRadioGroup, IonRadio, IonButton} from '@ionic/vue';
    export default{
        name: 'FormsComponents',
        components: {
            IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonRow, IonCol, IonInput, IonSelect,
            IonSelectOption, IonCheckbox, IonRadioGroup, IonRadio, IonButton

        },
        data(){
            return{
                nombre: '',
                departamento: '',
                consolas: [],
                genero: '',
                datos: ''
            }
        },
        methods:{
            imprimirDatos(){
                let consolasSeleccionadas = ''
                consolasSeleccionadas += (this.consolas[0]?'NintendoSwitch<br>':'')
                consolasSeleccionadas += (this.consolas[1]?'XboxS<br>':'')
                consolasSeleccionadas += (this.consolas[2]?'XboxX<br>':'')
                consolasSeleccionadas += (this.consolas[3]?'PlayStation<br>':'')
                consolasSeleccionadas += (this.consolas[4]?'PCMasterRace<br>':'')
 
                this.datos=
                '<h3>Nombre: </h3>' + this.nombre +
                '<h3>Departamento: </h3>' + this.departamento +
                '<h3>Consolas: </h3>' + consolasSeleccionadas +
                '<h3>Genero: </h3>' + this.genero
 
                //impresion en consola
                console.log(this.datos);
            }
        }
    };
</script>


<style scoped>

</style>