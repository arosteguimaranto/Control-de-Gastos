

export const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)
    return random + fecha
   
}


export const formatearFecha = fecha => {
    const fechaNueva = new Date(fecha);
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }
    const resp =  fechaNueva.toLocaleDateString('es-ES', opciones)
    return resp
}