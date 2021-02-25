
namespace ProyectosZec.Roezec.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Roezec.Representantes")]
    [BasedOnRow(typeof(Entities.RepresentantesRow), CheckNames = true)]
    public class RepresentantesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink, Width(150)]
        public String Nombre { get; set; }
        [Width(100)]
        public String Doc { get; set; }
        public String TipoDoc { get; set; }
        [Width(200), QuickFilter, QuickFilterOption("multiple", true)]
        public String Empresa { get; set; }
        [Width(85), DisplayName("CIF")]
        public String Cif { get; set; }
        [Hidden]
        public Int32 IdRepresentanteFisico { get; set; }
        [DisplayName("Dir. Representante"), Width(130)]
        public String Direccion { get; set; }
        [DisplayName("CP Repres.")]
        public String Cp { get; set; }
        [DisplayName("Pobl. Repres.")]
        public String Poblacion { get; set; }
        [DisplayName("Prov. Repres.")]
        public String Provincia { get; set; }
        [DisplayName("Pais. Repres.")]
        public String Pais { get; set; }
        public String Email { get; set; }
        public String Telefono { get; set; }
        public String Descripcion { get; set; }
        public DateTime FechaAlta { get; set; }
        public DateTime FechaModificacion { get; set; }
        public DateTime FechaBaja { get; set; }
        [Hidden]
        public String UsrAlta { get; set; }
        [Hidden]
        public String UsrModificacion { get; set; }
        [Hidden]
        public String UsrBaja { get; set; }
        [Hidden]
        public String MotivoBaja { get; set; }

        [QuickFilter]
        [Width(90)]
        public String Isla { get; set; }
        [Hidden, DisplayName("Notas Empresa")]
        public String NotasMarginales { get; set; }
        [Width(70), AlignRight, QuickFilter]
        public Int32 AnyoExpediente { get; set; }
        [QuickFilter, AlignRight]
        [Width(80), DisplayName("Nº Exp.")]
        public Int32 NumExpediente { get; set; }
        [AlignRight]
        public Int32 Agencia { get; set; }
        [QuickFilter]
        [Width(80)]
        public String Tecnico { get; set; }
    }
}