
namespace ProyectosZec.Kairos {

    @Serenity.Decorators.registerClass()
    export class KrsEmpleadosGrid extends Serenity.EntityGrid<KrsEmpleadosRow, any> {
        protected getColumnsKey() { return 'Kairos.KrsEmpleados'; }
        protected getDialogType() { return KrsEmpleadosDialog; }
        protected getIdProperty() { return KrsEmpleadosRow.idProperty; }
        protected getInsertPermission() { return KrsEmpleadosRow.insertPermission; }
        protected getLocalTextPrefix() { return KrsEmpleadosRow.localTextPrefix; }
        protected getService() { return KrsEmpleadosService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}