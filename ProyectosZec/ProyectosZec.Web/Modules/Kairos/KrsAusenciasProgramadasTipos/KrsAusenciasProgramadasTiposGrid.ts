
namespace ProyectosZec.Kairos {

    @Serenity.Decorators.registerClass()
    export class KrsAusenciasProgramadasTiposGrid extends Serenity.EntityGrid<KrsAusenciasProgramadasTiposRow, any> {
        protected getColumnsKey() { return 'Kairos.KrsAusenciasProgramadasTipos'; }
        protected getDialogType() { return KrsAusenciasProgramadasTiposDialog; }
        protected getIdProperty() { return KrsAusenciasProgramadasTiposRow.idProperty; }
        protected getInsertPermission() { return KrsAusenciasProgramadasTiposRow.insertPermission; }
        protected getLocalTextPrefix() { return KrsAusenciasProgramadasTiposRow.localTextPrefix; }
        protected getService() { return KrsAusenciasProgramadasTiposService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}