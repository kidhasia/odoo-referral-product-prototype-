import React, { useEffect, useState } from 'react';
import { useLeadsStore } from '../../store/authStore';
import { mockLeadsData } from '../../utils/helpers';
import LeadsTable from '../Common/LeadsTable';
import LeadDetailModal from './LeadDetailModal';
import AddLeadModal from './AddLeadModal';

export default function MyLeads() {
  const setLeads = useLeadsStore((state) => state.setLeads);
  const leads = useLeadsStore((state) => state.leads);
  const addLead = useLeadsStore((state) => state.addLead);
  const updateLead = useLeadsStore((state) => state.updateLead);
  const deleteLead = useLeadsStore((state) => state.deleteLead);
  const setSelectedLead = useLeadsStore((state) => state.setSelectedLead);
  const selectedLead = useLeadsStore((state) => state.selectedLead);

  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingLead, setEditingLead] = useState(null);

  useEffect(() => {
    if (leads.length === 0) {
      setLeads(mockLeadsData);
    }
  }, []);

  const handleViewDetails = (lead) => {
    setSelectedLead(lead);
    setEditingLead(null);
    setShowDetailModal(true);
  };

  const handleEdit = (lead) => {
    setSelectedLead(lead);
    setEditingLead(lead);
    setShowDetailModal(true);
  };

  const handleDelete = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (window.confirm('Are you sure you want to delete this lead?')) {
      deleteLead(id);
    }
  };

  const handleAddLead = (leadData) => {
    addLead(leadData);
    setShowAddModal(false);
  };

  const handleSaveLead = (updatedLead) => {
    updateLead(selectedLead.id, updatedLead);
    setShowDetailModal(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">My Leads</h1>
        <p className="text-gray-600 mt-1">Manage and track all your referral leads</p>
      </div>

      <LeadsTable
        leads={leads}
        onViewDetails={handleViewDetails}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onAddNew={() => setShowAddModal(true)}
      />

      {showDetailModal && selectedLead && (
        <LeadDetailModal
          lead={selectedLead}
          isEditing={!!editingLead}
          onClose={() => setShowDetailModal(false)}
          onSave={handleSaveLead}
        />
      )}

      {showAddModal && (
        <AddLeadModal
          onClose={() => setShowAddModal(false)}
          onAdd={handleAddLead}
        />
      )}
    </div>
  );
}
