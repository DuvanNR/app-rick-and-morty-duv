const saveLocalStorage = (comment) => {
    localStorage.setItem('comments', JSON.stringify( comment ) );
}

const showLocalStorage = () => {
    return ( localStorage.getItem('comments') ) ? JSON.parse( localStorage.getItem('comments') ) : [];
}

const filterCommentsId = (id) => {
    const itemsCommentsFilter = showLocalStorage();
    const itemsComments =  itemsCommentsFilter.filter(function(element){
        return element.id == id;
    });
    return itemsComments;
}

const createHtmlComment = (comment) => {
    const html = `<div class="bg-gray-100 mx-auto border-gray-500 border rounded-sm text-gray-700 mb-0.5 h-30">
                    <div class="p-3 border-l-8 border-dgreenRaM">
                        <div class="">
                            <div class="text-sm leading-5 font-semibold"><span class="text-xs leading-4 font-normal text-gray-500"> </span> ${ comment }</div>
                        </div>
                    </div>
                  </div>`;
    return html;
}

export {
    saveLocalStorage,
    filterCommentsId,
    showLocalStorage,
    createHtmlComment
}

// export class CustomStorage {

//     constructor() {
//         this.cargarLocalStorage();
//     }

//     //newComment( todo ) {
//     newComment( todo ) {
//         this.todos.push( todo );
//         this.guardarLocalStorage();
//     }

//     // eliminarTodo( id ) {
//     //     this.todos = this.todos.filter( todo => todo.id != id )
//     //     this.guardarLocalStorage();
//     // }

//     // marcarCompletado( id ) { 

//     //     for( const todo of this.todos ) {

//     //         if( todo.id == id ) {

//     //             todo.completado = !todo.completado;
//     //             this.guardarLocalStorage();
//     //             break;
//     //         }

//     //     }


//     // }

//     // eliminarCompletados() {
//     //     this.todos = this.todos.filter( todo => !todo.completado )
//     //     this.guardarLocalStorage();
//     // }

//     guardarLocalStorage(){
//         localStorage.setItem('comments', JSON.stringify( { id: 1, comment: 'sdsdsd'} ) );
//     }

//     cargarLocalStorage(){
//         this.todos = ( localStorage.getItem('comments') )
//                         ? JSON.parse( localStorage.getItem('comments') )
//                         : [];

//         //this.todos = this.todos.map( Todo.fromJson );
//     }

// }