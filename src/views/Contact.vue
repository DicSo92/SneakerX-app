<template>
    <ion-content>
        <iframe width="100%"
                height="300"
                frameborder="0" style="border:0"
                :src="'https://www.google.com/maps/embed/v1/place?key=' + 'AIzaSyDYW1IOQqIaP-2g3vGUXmfh1nMwJBR6-2U' + '&q=19+Rue+Yves+Toudic,+75010+Paris'"
                allowfullscreen>
        </iframe>

        <ion-list lines="full">
            <ion-item>
                <ion-label position="stacked">First Name <ion-text color="danger">*</ion-text></ion-label>
                <ion-input required type="text" @input="firstname = $event.target.value"></ion-input>
            </ion-item>

            <ion-item>
                <ion-label position="stacked">Last Name <ion-text color="danger">*</ion-text></ion-label>
                <ion-input required type="text" @input="lastname = $event.target.value"></ion-input>
            </ion-item>

            <ion-item>
                <ion-label position="stacked">Email <ion-text color="danger">*</ion-text></ion-label>
                <ion-input required type="email" @input="email = $event.target.value"></ion-input>
            </ion-item>

            <ion-item>
                <ion-label position="floating">Object</ion-label>
                <ion-input type="text" @input="mailObject = $event.target.value"></ion-input>
            </ion-item>

            <ion-item>
                <ion-label position="stacked">Message</ion-label>
                <ion-textarea @input="mailMessage = $event.target.value"></ion-textarea>
            </ion-item>
        </ion-list>

        <div class="ion-padding">
            <ion-button expand="block" type="submit" class="ion-no-margin">Send Message</ion-button>
        </div>
    </ion-content>
</template>

<script>
    export default {
        name: "Contact",
        data() {
            return {
                firstname: '',
                lastname: '',
                email: '',
                mailObject: '',
                mailMessage: ''
            }
        }
    }
</script>

<style scoped>

</style>
