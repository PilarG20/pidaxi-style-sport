export const ConvertirBase64 = async (imagenCargada: File) => {

    return new Promise((resolve, rejects) => {
        const lectorArchivo = new FileReader();

        lectorArchivo.readAsDataURL(imagenCargada);

        lectorArchivo.onload = () => {
            resolve(lectorArchivo.result)
        };

        lectorArchivo.onerror = (errorsito) => {
            rejects(errorsito)
        };
    });


}