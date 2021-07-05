
namespace ProyectosZec.Nuevo_Roezec {

    @Serenity.Decorators.registerClass()
    export class ContactosGrid extends Serenity.EntityGrid<ContactosRow, any> {
        protected getColumnsKey() { return 'Nuevo_Roezec.Contactos'; }
        protected getDialogType() { return ContactosDialog; }
        protected getIdProperty() { return ContactosRow.idProperty; }
        protected getInsertPermission() { return ContactosRow.insertPermission; }
        protected getLocalTextPrefix() { return ContactosRow.localTextPrefix; }
        protected getService() { return ContactosService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}