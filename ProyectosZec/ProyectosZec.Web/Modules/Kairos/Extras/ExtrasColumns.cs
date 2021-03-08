
namespace ProyectosZec.Kairos.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Kairos.Extras")]
    [BasedOnRow(typeof(Entities.ExtrasRow), CheckNames = true)]
    public class ExtrasColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }

        [Width(100), QuickFilter]
        public String Sede { get; set; }

        [DisplayName("Nº Empl."), AlignRight]
        public Int64 IdEmpleado { get; set; }

        [DisplayName("Empleado"), Width(220)]
        public String Empleado { get; set; }
        [DisplayName("Fecha"), QuickFilter, DisplayFormat("d")]
        public DateTime Fecha { get; set; }
        [Hidden]
        public Int32 Tipo { get; set; }
        [Width(100),AlignRight, DisplayFormat("#,##0.00")]
        public Decimal TotalHorasExtrasReales { get; set; }
        [Width(100),AlignRight, DisplayFormat("#,##0.00")]
        public Decimal TotalHorasExtrasConvertidas { get; set; }

        [AlignRight,DisplayName("HH:mm"),Width(70)]
        public String Convertidas { get; set; }
        [Hidden]
        public Int64 IdAusenciaProgramadaTipo { get; set; }
        [Hidden]
        public String Dia { get; set; }
        [Width(110), QuickFilter]
        public String EstadoDesc { get; set; }
        public String MotivoCancelacion { get; set; }
        public DateTime FechaAceptacionCancelacion { get; set; }
    }
}