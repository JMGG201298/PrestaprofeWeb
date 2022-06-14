<template>
    <div>
        <v-dialog
            v-model="dialogNote"
            width="500">
            <v-card>
                <v-card-title>
                    Anotaciones
                </v-card-title>
                <v-card-subtitle>
                    Indica la razón por la cual el prestamo se <span>#</span>
                </v-card-subtitle>
                <v-card-text>
                    <v-textarea
                        solo
                        label="Escribe una razón">
                    </v-textarea>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>

export default({
    name: 'DialogNote',
    data() {
        return {
            dialogNote: false
        }
    },
    methods: {
        
    },
})
</script>
