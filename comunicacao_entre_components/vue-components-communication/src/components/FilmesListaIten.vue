<template>
    <li class="list-group-item">
        <span>{{ filmeTitulo }}</span>
        <button class="btn btn-success float-right">Editar</button>
    </li>
</template>

<script>
export default {
    props: ['filmeTitulo']
}
</script>
