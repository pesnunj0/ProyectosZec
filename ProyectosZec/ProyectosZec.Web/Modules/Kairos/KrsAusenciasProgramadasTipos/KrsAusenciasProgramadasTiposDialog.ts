
namespace ProyectosZec.Kairos {

    @Serenity.Decorators.registerClass()
    export class KrsAusenciasProgramadasTiposDialog extends Serenity.EntityDialog<KrsAusenciasProgramadasTiposRow, any> {
        protected getFormKey() { return KrsAusenciasProgramadasTiposForm.formKey; }
        protected getIdProperty() { return KrsAusenciasProgramadasTiposRow.idProperty; }
        protected getLocalTextPrefix() { return KrsAusenciasProgramadasTiposRow.localTextPrefix; }
        protected getNameProperty() { return KrsAusenciasProgramadasTiposRow.nameProperty; }
        protected getService() { return KrsAusenciasProgramadasTiposService.baseUrl; }
        protected getDeletePermission() { return KrsAusenciasProgramadasTiposRow.deletePermission; }
        protected getInsertPermission() { return KrsAusenciasProgramadasTiposRow.insertPermission; }
        protected getUpdatePermission() { return KrsAusenciasProgramadasTiposRow.updatePermission; }

        protected form = new KrsAusenciasProgramadasTiposForm(this.idPrefix);

    }
}