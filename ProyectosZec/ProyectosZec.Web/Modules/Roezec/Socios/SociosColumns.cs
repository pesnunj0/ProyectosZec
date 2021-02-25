
namespace ProyectosZec.Roezec.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Roezec.Socios")]
    [BasedOnRow(typeof(Entities.SociosRow), CheckNames = true)]
    public class SociosColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink,DisplayName("Socio")]
        public String Nombre { get; set; }
        [Width(80)]
        public String TipoDoc { get; set; }
        [Width(80)]
        public String Doc { get; set; }
        [Width(80)]
        public String TipoPersona { get; set; }
        [Width(200), QuickFilter, QuickFilterOption("multiple", true)]
        public String Empresa { get; set; }
        [Width(85), DisplayName("CIF")]
        public String Cif { get; set; }
        [DisplayName("Dir Socio")]
        public String Direccion { get; set; }
        [Width(80), Hidden,DisplayName("CP Socio")]
        public String Cp { get; set; }
        public String Poblacion { get; set; }
        public String Provincia { get; set; }
        public String Pais { get; set; }
        [DisplayName("Email Socio")]
        public String Email { get; set; }
        [DisplayName("Telef. Socio")]
        public String Telefono { get; set; }
        public String Descripcion { get; set; }
 

        [QuickFilter]
        [Width(90)]
        public String Isla { get; set; }
        [Hidden,DisplayName("Notas Empresa")]
        public String NotasMarginales { get; set; }
        [Width(70), AlignRight, QuickFilter]
        public Int32 AnyoExpediente { get; set; }
        [QuickFilter, AlignRight]
        [Width(80),DisplayName("Nº Exp.")]
        public Int32 NumExpediente { get; set; }
        [AlignRight]
        public Int32 Agencia { get; set; }
        [QuickFilter]
        [Width(80)]
        public String Tecnico { get; set; }
        [Hidden]
        public String FormaJuridica { get; set; }
        [Hidden, AlignRight]
        public Double Superficie { get; set; }
        [Width(90)]
        public String ExentaAreaAcotada { get; set; }
        [Hidden]
        [DisplayName("Motivo Exenc.")]
        public String MotivosExencion { get; set; }
        [DisplayName("Obj. Empleo"), DisplayFormat("#,###"), AlignRight]
        public Double ObjetivoEmpleo { get; set; }
        [DisplayName("Obj. Invers."), DisplayFormat("#,###"), AlignRight, Width(100)]
        public Double ObjetivoInversion { get; set; }
        [Hidden, DisplayName("Observ. Empleo")]
        public String ObservacionesEmpleo { get; set; }
        [Hidden, DisplayName("Observ. Inversión")]
        public String ObservacionesInversion { get; set; }
        [Hidden, AlignRight]
        public Int32 PreEmpleo { get; set; }
        [Hidden, AlignRight]
        public Int32 PreInversion { get; set; }
        [Hidden, AlignRight]
        public Int32 TrasEmpleo { get; set; }
        [Hidden, AlignRight]
        public Int32 TrasInversion { get; set; }

        [Width(150), AlignRight, DisplayName("Estado"), QuickFilter, QuickFilterOption("multiple", true)]
        public String Estado { get; set; }
        [Hidden, Width(90)]
        public Int32 Participacion { get; set; }
        public DateTime FechaAlta { get; set; }
        public DateTime FechaModificacion { get; set; }
        public DateTime FechaBaja { get; set; }
        public String UsrAlta { get; set; }
        public String UsrModificacion { get; set; }
        public String UsrBaja { get; set; }
        public String MotivoBaja { get; set; }
    }
}