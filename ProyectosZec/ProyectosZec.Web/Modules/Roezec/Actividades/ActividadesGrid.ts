﻿
namespace ProyectosZec.Roezec {

    @Serenity.Decorators.registerClass()
    // Añadido para los filtros multiples
    @Serenity.Decorators.filterable()
    // Fin Añadido

    export class ActividadesGrid extends Serenity.EntityGrid<ActividadesRow, any> {
        protected getColumnsKey() { return 'Roezec.Actividades'; }
        protected getDialogType() { return ActividadesDialog; }
        protected getIdProperty() { return ActividadesRow.idProperty; }
        protected getInsertPermission() { return ActividadesRow.insertPermission; }
        protected getLocalTextPrefix() { return ActividadesRow.localTextPrefix; }
        protected getService() { return ActividadesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        // Agrupar y sumar 
        protected createSlickGrid() {
            var grid = super.createSlickGrid();

            // need to register this plugin for grouping or you'll have errors
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

            grid.setSelectionModel(new Slick.RowSelectionModel());

            return grid;
        }
        // Mostramos Footer con los totales
        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            // Fila Seleccionable
            opt.enableTextSelectionOnCells = true;
            opt.selectedCellCssClass = "slick-row-selected";
            opt.enableCellNavigation = true;
            return opt;
        }


        // Botones Excel y Pdf
        getButtons() {
            var buttons = super.getButtons();

            buttons.push(ProyectosZec.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Roezec/Actividades/ListExcel',
                separator: true
            }));

            buttons.push(ProyectosZec.Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            buttons.push(
                {
                    title: 'Agrupar por Año',
                    cssClass: 'expand-all-button',
                    onClick: () => this.view.setGrouping(
                        [{
                            formatter: x => 'Año: ' + x.value + ' (' + x.count + ' Nace/Empresas)',
                            getter: ActividadesRow.Fields.AnyoExpediente
                        }])
                }
            );

            buttons.push(
                {
                    title: 'Agrupar por Nace',
                    cssClass: 'expand-all-button',
                    onClick: () => this.view.setGrouping(
                        [{
                            formatter: x => 'Nace: ' + x.value + ' (' + x.count + ' Empresas)',
                            getter: ActividadesRow.Fields.Actividad
                        }])
                }
            );
            buttons.push(
                {
                    title: 'Agrupar por Empresa',
                    cssClass: 'expand-all-button',
                    onClick: () => this.view.setGrouping(
                        [{
                            formatter: x => 'Empresa: ' + x.value + ' (' + x.count + ' Naces)',
                            getter: ActividadesRow.Fields.Actividad
                        }])
                }
            );
            buttons.push(
                {
                    title: 'Agrupar por Año y Nace',
                    cssClass: 'expand-all-button',
                    onClick: () => this.view.setGrouping(
                        [{
                            formatter: x => 'Año: ' + x.value + ' (' + x.count + ' Nace/Empresas)',
                            getter: ActividadesRow.Fields.AnyoExpediente
                        }, {
                            formatter: x => 'Nace: ' + x.value + ' (' + x.count + ' Empresas)',
                            getter: ActividadesRow.Fields.Actividad
                        }])
                }
            );
            buttons.push(
                {
                    title: 'Desagrupar',
                    cssClass: 'collapse-all-button',
                    onClick: () => this.view.setGrouping([])
                }
            );

            return buttons;
            // Fin añadidos

        }
    }
}