
namespace ProyectosZec.Intranet.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Intranet.Telefonos")]
    [BasedOnRow(typeof(Entities.TelefonosRow), CheckNames = true)]
    public class TelefonosForm
    {
        public Int32 SedeId { get; set; }
        public Int32 DepartamentoId { get; set; }
        public String Nombre { get; set; }
        public String ExtCorta { get; set; }
        public String Fijo { get; set; }
        public String Movil { get; set; }
        public String CortoMovil { get; set; }
        public String Contrato { get; set; }
        public String PUK { get; set; }
        public String Multisim { get; set; }
    }
}