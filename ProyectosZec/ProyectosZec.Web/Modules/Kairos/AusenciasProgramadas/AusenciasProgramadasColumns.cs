
namespace ProyectosZec.Kairos.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Kairos.AusenciasProgramadas")]
    [BasedOnRow(typeof(Entities.AusenciasProgramadasRow), CheckNames = true)]
    public class AusenciasProgramadasColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
       
        [DisplayName("Empleado")]
        public String Empleado { get; set; }
        [DisplayName("Tipo Solicitud"),QuickFilter,Width(300)]
        public String  Descripcion { get; set; }
        [DisplayName("Desde"), DisplayFormat("dd/MM/yyyy HH:mm"),QuickFilter,Width(120)]
        public DateTime FechaDesde { get; set; }
        [DisplayName("Hasta"), DisplayFormat("dd/MM/yyyy HH:mm"),Width(120)]
        public DateTime FechaHasta { get; set; }
        [Hidden]
        public DateTime FechaBorrado { get; set; }
        [Width(100), AlignRight, DisplayFormat("#,##0.00")]
        public Decimal TotalHoras { get; set; }
        [Width(100), AlignRight]
        public Int32 TotalDias { get; set; }
    }
}