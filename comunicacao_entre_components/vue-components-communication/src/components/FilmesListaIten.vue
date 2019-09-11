<template>
    <li class="list-group-item">
        <!--<span>{{ filmeTitulo }}</span>-->
        <span>{{filme.titulo}} {{filme.ano}}</span>
        <button class="btn btn-success float-right">Editar</button>
    </li>
</template>

<script>
export default {
    props: {
        filme: {
            type: Object,
            required: true
        }
        
    },
}
</script>
